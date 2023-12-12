import React, { useState, useEffect } from 'react';
import '../CSS/Table.css'
import NestedList from './NestedList';

interface TableProps {
  onRowClick: (username: string) => void;
  selectedUser: string | null;
}

const Table: React.FC<TableProps> = ({ onRowClick, selectedUser }) => {
  const [users, setUsers] = useState([
    { rank: 1, username: 'JohnDoe', problemsSolved: 10 },
    { rank: 2, username: 'JaneSmith', problemsSolved: 8 },
    // Add more users as needed
  ]);

  useEffect(() => {
    // Update scores when the component mounts
    updateScores();
  }, []);

  const calculateScore = (problemsSolved: number) => {
    return problemsSolved * 3;
  };

  const updateScores = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({
        ...user,
        score: calculateScore(user.problemsSolved),
      }))
    );
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
              {/* <td>{user.score}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <NestedList selectedUser={selectedUser} />
    </div>
  );
};

export default Table;
