// NestedList.tsx
import React from 'react';
import ProblemDetails from './problemlist';

const NestedList: React.FC = () => {
  return (
    <div className="nested-list-container">
      {/* ... Your nested list JSX here ... */}
      <ProblemDetails />
    </div>
  );
};

export default NestedList;
