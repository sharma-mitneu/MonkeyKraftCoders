import React, { useState } from 'react';
import NestedList from './NestedList';

interface TableProps {
  onRowClick: (username: string) => void;
  selectedUser: string | null;
}

const Table: React.FC<TableProps> = ({ onRowClick, selectedUser }) => {
  const [users] = useState([
    { rank: 1, username: 'JohnDoe', problemsSolved: 10 },
    { rank: 2, username: 'JaneSmith', problemsSolved: 8 },
    // Add more users as needed
  ]);

  const calculateScore = (problemsSolved: number) => {
    return problemsSolved * 3;
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th># Rank</th>
            <th>Username</th>
            <th>Problems Solved</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.username}
              className={selectedUser === user.username ? 'user-row selected' : 'user-row'}
              onClick={() => onRowClick(user.username)}
            >
              <td>{user.rank}</td>
              <td>{user.username}</td>
              <td>{user.problemsSolved}</td>
              <td>{calculateScore(user.problemsSolved)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NestedList selectedUser={selectedUser} />
    </div>
  );
};

export default Table;
