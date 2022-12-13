import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes} from 'react-router-dom';
import Header from "./components/header";
import About from './components/about';
import Skills from './components/skills';

function App() {
  return (
    <Router>
    <main className="App">
       <Header/>
       <About/>
        <Routes>
        </Routes>
       <Skills/>
    </main>
    </Router>
  );
}

export default App;
