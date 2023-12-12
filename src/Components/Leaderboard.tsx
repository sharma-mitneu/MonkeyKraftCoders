import React, { useState, useEffect } from 'react';
import '../CSS/Leaderboard.css'
import Table from './Table';

const Leaderboard: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  useEffect(() => {
    const calculateScore = (problemsSolved: number) => {
      return problemsSolved * 3;
    };

    const updateScores = () => {
      const rows = document.querySelectorAll('.table tbody tr');

      rows.forEach((row: any) => {
        const problemsSolved = parseInt(row.cells[2].innerText, 10);
        // const score = calculateScore(problemsSolved);
        // row.cells[3].innerText = score;
      });
    };

    // Attach a click event listener to each row to show scores and problems solved
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach((row: any) => {
      row.addEventListener('click', () => {
        const username = row.dataset.username;
        setSelectedUser(username);
      });
    });

    // Close the nested list when clicking outside of it
    document.addEventListener('click', (event) => {
      const nestedListContainer = document.getElementById('nestedListContainer');
    
      if (nestedListContainer) {
        let found = false;
    
        // Check if the event target is inside any row
        rows.forEach((row: any) => {
          if (row.contains(event.target as Node)) {
            found = true;
          }
        });
    
        // If the target is not inside the container or any row, hide the container
        if (!nestedListContainer.contains(event.target as Node) && !found) {
          nestedListContainer.style.display = 'none';
        }
      }
    });

    // Initial update of scores
    updateScores();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Code Competition Leaderboard</h2>
      <div className="leaderboard-container">
        <Table onRowClick={(username) => setSelectedUser(username)} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Leaderboard;
