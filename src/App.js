import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Pricing from './componants/Pricing/Pricing';
import AssignmentMarks from './componants/AssignmentMarks/AssignmentMarks';
import PhoneBar from './componants/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-4xl font-bold">This is a big big header</h1>
      <p>This is just a paragraph.</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
