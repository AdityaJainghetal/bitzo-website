
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const RewardContext = createContext();

// export function RewardProvider({ children }) {
//   // Load saved points from localStorage, or start with 70
//   const [points, setPoints] = useState(() => {
//     const saved = localStorage.getItem('bitzoRewardPoints');
//     return saved ? parseInt(saved, 10) : 70;
//   });

//   // Save points to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('bitzoRewardPoints', points.toString());
//   }, [points]);

//   // Function to add points (used from WatchPage, etc.)
//   const addPoints = (amount) => {
//     setPoints((prev) => prev + amount);
//   };

//   // You can add more functions later, e.g.:
//   const resetPoints = () => setPoints(70);
//   const subtractPoints = (amount) => setPoints((prev) => Math.max(0, prev - amount));

//   const value = {
//     points,
//     addPoints,
//     resetPoints,          // optional
//     subtractPoints,       // optional
//   };

//   return (
//     <RewardContext.Provider value={value}>
//       {children}
//     </RewardContext.Provider>
//   );
// }

// // Custom hook to use rewards anywhere in the app
// export const useRewards = () => {
//   const context = useContext(RewardContext);
//   if (!context) {
//     throw new Error('useRewards must be used within a RewardProvider');
//   }
//   return context;
// };

// src/context/RewardContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const RewardContext = createContext();

export function RewardProvider({ children }) {
  // Load from localStorage with proper float parsing, default 70
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('bitzoRewardPoints');
    if (saved !== null) {
      const parsed = parseFloat(saved);
      return isNaN(parsed) ? 70 : parsed;
    }
    return 70;
  });

  // Save with proper decimal precision
  useEffect(() => {
    localStorage.setItem('bitzoRewardPoints', points.toFixed(2));
  }, [points]);

  // Safe addition (avoids floating point precision issues)
  const addPoints = (amount) => {
    setPoints((prev) => {
      // toFixed(2) → Number() to avoid string issues
      const newValue = Number((prev + amount).toFixed(2));
      return newValue;
    });
  };

  // Reset to initial value
  const resetPoints = () => {
    setPoints(70);
  };

  // Subtract with floor at 0
  const subtractPoints = (amount) => {
    setPoints((prev) => Math.max(0, Number((prev - amount).toFixed(2))));
  };

  const value = {
    points,
    addPoints,
    resetPoints,
    subtractPoints,
  };

  return (
    <RewardContext.Provider value={value}>
      {children}
    </RewardContext.Provider>
  );
}

// Custom hook
export const useRewards = () => {
  const context = useContext(RewardContext);
  if (!context) {
    throw new Error('useRewards must be used within a RewardProvider');
  }
  return context;
};