import React, { useState, useEffect } from 'react';
import MissionManager from './MissionManager';
import { Shield, LogOut } from 'lucide-react';

interface Mission {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  created_at: string;
  updated_at: string;
}

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchMissions();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchMissions = async () => {
    try {
      const response = await fetch('/api/missions');
      if (response.ok) {
        const data = await response.json();
        setMissions(data);
      }
    } catch (error) {
      console.error('Failed to fetch missions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Please log in to access the admin dashboard</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Total Missions</h3>
            <p className="text-3xl font-bold text-white">{missions.length}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Active Missions</h3>
            <p className="text-3xl font-bold text-green-500">
              {missions.filter(m => m.status === 'active').length}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Completed Missions</h3>
            <p className="text-3xl font-bold text-blue-500">
              {missions.filter(m => m.status === 'completed').length}
            </p>
          </div>
        </div>

        {/* Mission Manager */}
        <MissionManager missions={missions} onUpdate={fetchMissions} />
      </main>
    </div>
  );
};

export default AdminDashboard;
