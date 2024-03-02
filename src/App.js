import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import navBar from './Navbar.js';

function App() {
  return (
    <div className="App">
        <navBar />
        <h1>CS 230L</h1>
        <h2>Section 01</h2>
        <p>WVU ID: 800393145</p>
        <p>Hi I am Kaleb</p>

        <Card />

    </div>
  );
}

export default App;