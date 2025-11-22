from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional
from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session, sessionmaker, relationship
import os

# Database setup
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./missions.db")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Database Models
class Mission(Base):
    __tablename__ = "missions"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    date = Column(DateTime, nullable=False)
    description = Column(Text)
    status = Column(String, default="active")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    logs = relationship("Log", back_populates="mission", cascade="all, delete-orphan")

class Log(Base):
    __tablename__ = "logs"
    
    id = Column(Integer, primary_key=True, index=True)
    mission_id = Column(Integer, ForeignKey("missions.id"))
    timestamp = Column(DateTime, default=datetime.utcnow)
    message = Column(Text, nullable=False)
    log_type = Column(String, default="info")
    mission = relationship("Mission", back_populates="logs")

# Create tables
Base.metadata.create_all(bind=engine)

# Pydantic models
class LogCreate(BaseModel):
    message: str
    log_type: str = "info"

class LogResponse(BaseModel):
    id: int
    mission_id: int
    timestamp: datetime
    message: str
    log_type: str
    
    class Config:
        from_attributes = True

class MissionCreate(BaseModel):
    title: str
    date: datetime
    description: Optional[str] = None
    status: str = "active"

class MissionUpdate(BaseModel):
    title: Optional[str] = None
    date: Optional[datetime] = None
    description: Optional[str] = None
    status: Optional[str] = None

class MissionResponse(BaseModel):
    id: int
    title: str
    date: datetime
    description: Optional[str]
    status: str
    created_at: datetime
    updated_at: datetime
    logs: List[LogResponse] = []
    
    class Config:
        from_attributes = True

# FastAPI app
app = FastAPI(title="Starship Portfolio API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Starship Portfolio API", "version": "1.0.0"}

# Mission endpoints
@app.get("/api/missions", response_model=List[MissionResponse])
def get_missions(db: Session = Depends(get_db)):
    missions = db.query(Mission).all()
    return missions

@app.get("/api/missions/{mission_id}", response_model=MissionResponse)
def get_mission(mission_id: int, db: Session = Depends(get_db)):
    mission = db.query(Mission).filter(Mission.id == mission_id).first()
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")
    return mission

@app.post("/api/missions", response_model=MissionResponse, status_code=201)
def create_mission(mission: MissionCreate, db: Session = Depends(get_db)):
    db_mission = Mission(**mission.dict())
    db.add(db_mission)
    db.commit()
    db.refresh(db_mission)
    return db_mission

@app.put("/api/missions/{mission_id}", response_model=MissionResponse)
def update_mission(mission_id: int, mission_update: MissionUpdate, db: Session = Depends(get_db)):
    mission = db.query(Mission).filter(Mission.id == mission_id).first()
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")
    
    update_data = mission_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(mission, key, value)
    
    mission.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(mission)
    return mission

@app.delete("/api/missions/{mission_id}", status_code=204)
def delete_mission(mission_id: int, db: Session = Depends(get_db)):
    mission = db.query(Mission).filter(Mission.id == mission_id).first()
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")
    db.delete(mission)
    db.commit()
    return None

# Log endpoints
@app.get("/api/missions/{mission_id}/logs", response_model=List[LogResponse])
def get_mission_logs(mission_id: int, db: Session = Depends(get_db)):
    mission = db.query(Mission).filter(Mission.id == mission_id).first()
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")
    return mission.logs

@app.post("/api/missions/{mission_id}/logs", response_model=LogResponse, status_code=201)
def create_log(mission_id: int, log: LogCreate, db: Session = Depends(get_db)):
    mission = db.query(Mission).filter(Mission.id == mission_id).first()
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")
    
    db_log = Log(mission_id=mission_id, **log.dict())
    db.add(db_log)
    db.commit()
    db.refresh(db_log)
    return db_log

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
