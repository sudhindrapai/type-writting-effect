import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeWrittingEffect from './components/TypeWritting/typeWritting';
function App() {
  return (
    <div className="App">
      <TypeWrittingEffect text={"I am Sudhindra Pai"} speed={400} clearMessageSpeed={100} fontSize={24} />
    </div>
  );
}

export default App;
