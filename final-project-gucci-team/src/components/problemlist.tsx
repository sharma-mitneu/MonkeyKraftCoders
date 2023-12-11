// ProblemDetails.tsx
import React from 'react';

interface ProblemDetailsProps {
  selectedUser: string | null;
}

const problemlist: React.FC<ProblemDetailsProps> = ({ selectedUser }) => {
  return (
    <div className="new-container">
      {selectedUser && <p>Unique dummy problem statement for {selectedUser} goes here.</p>}
    </div>
  );
};

export default problemlist;
