// App.tsx
import React from 'react';
import './App.css'; // Import your global styles if needed
import Leaderboard from './Components/Leaderboard';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* You can add a header or any other components here */}
      <Leaderboard />
    </div>
  );
};

export default App;
