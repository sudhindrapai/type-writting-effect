import {TypeWritter} from 'typewritter';
function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <TypeWritter text="Hi This is a new typewritting package in typescript!!" speed={100} fontSize={16} clearMessageSpeed={30} loop={true} />
    </div>
  );
}

export default App;
