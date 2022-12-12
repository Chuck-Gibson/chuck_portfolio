import logo from './logo.svg';
import './App.css';
//import {Router,Routes} from 'react-router';
import Header from "./components/header";

function App() {
  return (
    <div className="App">
       <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Chucks portfolio site</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
    </div>
  );
}

export default App;
