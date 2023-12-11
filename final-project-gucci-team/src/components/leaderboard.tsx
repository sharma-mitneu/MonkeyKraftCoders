// Leaderboard.tsx
import React from 'react';
import Table from './table';

const Leaderboard: React.FC = () => {
  return (
    <div className="leaderboard-container">
      <h2 className="mt-3">Code Competition Leaderboard</h2>
      <Table />
    </div>
  );
};

export default Leaderboard;
