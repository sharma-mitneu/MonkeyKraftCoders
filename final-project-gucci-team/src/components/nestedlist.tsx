import React, { useEffect } from 'react';
import '../CSS/Nested.css'

interface NestedListProps {
  selectedUser: string | null;
}

const NestedList: React.FC<NestedListProps> = ({ selectedUser }) => {
  useEffect(() => {
    const calculateScore = (problemsSolved: number) => {
      return problemsSolved * 3;
    };

    const updateScores = () => {
      const rows = document.querySelectorAll('.table tbody tr');

      rows.forEach((row: any) => {
        const problemsSolved = parseInt(row.cells[2].innerText, 10);
        const score = calculateScore(problemsSolved);
        row.cells[3].innerText = score;
      });
    };

    const createNestedList = (username: string) => {
      const dummyProblems = ['Problem 1', 'Problem 2', 'Problem 3', 'Problem 4', 'Problem 5'];
      const nestedListContainer = document.getElementById('nestedList');

      nestedListContainer.innerHTML = dummyProblems.map((problem, index) => `<div class="problem" data-problem-index="${index}">${problem}</div>`).join('');
      document.getElementById('nestedListContainer')!.style.display = 'block';

      // Attach click event listener to each problem div
      const problemDivs = document.querySelectorAll('.problem');
      problemDivs.forEach((problemDiv: any) => {
        problemDiv.addEventListener('click', () => {
          const newContainer = document.getElementById('newContainer');
          const problemIndex = problemDiv.dataset.problemIndex;
          newContainer!.innerHTML = `<p>Unique dummy problem statement for Problem ${parseInt(problemIndex) + 1} goes here.</p>`;
          newContainer!.style.display = 'block';
        });
      });
    };

    // Attach a click event listener to each row to show scores and problems solved
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach((row: any) => {
      row.addEventListener('click', () => {
        const username = row.dataset.username;
        createNestedList(username);
      });
    });

    // Close the nested list when clicking outside of it
    document.addEventListener('click', (event) => {
      const nestedListContainer = document.getElementById('nestedListContainer');
    
      if (nestedListContainer != null) {
        let found = false;
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].contains(event.target as Node)) {
            found = true;
            break;
          }
        }
        if (!nestedListContainer.contains(event.target as Node) && !found) {
          nestedListContainer.style.display = 'none';
        }
      }
    });
    
    
    

    // Initial update of scores
    updateScores();
  }, [selectedUser]);

  return (
    <div className="nested-list-container" id="nestedListContainer">
      <p>{selectedUser ? `Problems for ${selectedUser}` : 'Select a user to view problems.'}</p>
      <div className="nested-list" id="nestedList"></div>
    </div>
  );
};

export default NestedList;
