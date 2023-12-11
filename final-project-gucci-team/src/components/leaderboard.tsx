import React, { useState } from 'react';
import Table from './Table';

const Leaderboard: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleRowClick = (username: string) => {
    setSelectedUser(username);
  };

  return (
    <div className="container mt-3">
      <h2>Code Competition Leaderboard</h2>
      <div className="leaderboard-container">
        <Table onRowClick={handleRowClick} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Leaderboard;
