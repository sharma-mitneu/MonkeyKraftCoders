import React from 'react';

interface NestedListProps {
  selectedUser: string | null;
}

const NestedList: React.FC<NestedListProps> = ({ selectedUser }) => {
  const dummyProblems = ['Problem 1', 'Problem 2', 'Problem 3', 'Problem 4', 'Problem 5'];

  return (
    <div className="nested-list-container">
      <p>{selectedUser ? `Problems for ${selectedUser}` : 'Select a user to view problems.'}</p>
      <div className="nested-list">
        {dummyProblems.map((problem, index) => (
          <div key={index} className="problem">
            {problem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedList;
