import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeWrittingEffect from './components/TypeWritting/typeWritting';
import Test from './components/typing-test-directory/test'
function App() {
  return (
    <div className="App">
      <TypeWrittingEffect text={"I am Sudhindra Pai"} speed={400} clearMessageSpeed={100} fontSize={24} loop={true} />
      <Test />
    </div>
  );
}

export default App;
