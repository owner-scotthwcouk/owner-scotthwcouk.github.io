import React, { useState, useEffect } from 'react';

// A single light component for reusability
const Light: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div
        className="absolute rounded-full bg-voyager-blue/20 animate-softGlow"
        style={style}
    />
);

// Decorative button component
const DecoButton: React.FC<{ isActive: boolean }> = ({ isActive }) => (
    <div className={`w-2 h-2 transition-colors duration-500 ${isActive ? 'bg-voyager-orange' : 'bg-voyager-blue/30'}`} />
);

export const BackgroundEffects: React.FC = () => {
    const [activeButtons, setActiveButtons] = useState<Set<number>>(new Set());
    const totalButtons = 200; // Total number of buttons in the grid

    // Effect to randomly toggle buttons
    useEffect(() => {
        const interval = setInterval(() => {
            const newActiveButtons = new Set<number>();
            const numActive = Math.floor(Math.random() * 10) + 5; // Activate 5 to 15 buttons
            for (let i = 0; i < numActive; i++) {
                newActiveButtons.add(Math.floor(Math.random() * totalButtons));
            }
            setActiveButtons(newActiveButtons);
        }, 1500); // Update every 1.5 seconds

        return () => clearInterval(interval);
    }, []);

    // An array of styles for different lights to avoid repetition
    const lightStyles = [
        { top: '10%', left: '5%', width: '200px', height: '200px', animationDelay: '0s', animationDuration: '7s' },
        { top: '50%', left: '25%', width: '150px', height: '150px', animationDelay: '1s', animationDuration: '6s' },
        { bottom: '10%', left: '15%', width: '100px', height: '100px', animationDelay: '2s', animationDuration: '5s' },
        { top: '20%', right: '10%', width: '180px', height: '180px', animationDelay: '0.5s', animationDuration: '8s' },
        { top: '70%', right: '20%', width: '130px', height: '130px', animationDelay: '1.5s', animationDuration: '6s' },
    ];

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
            {/* Flashing Lights */}
            {lightStyles.map((style, index) => (
                <Light key={`light-${index}`} style={style} />
            ))}

            {/* Decorative Button Grid - positioned at the bottom right */}
            <div className="absolute bottom-4 right-4 grid grid-cols-20 gap-1 opacity-20" style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }}>
                {Array.from({ length: totalButtons }).map((_, index) => (
                    <DecoButton key={`btn-${index}`} isActive={activeButtons.has(index)} />
                ))}
            </div>
        </div>
    );
};