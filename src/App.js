import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "./components/header";
import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import Intro from './components/Introduction';

function App() {

  return (
    <Router>
    <main className="App">
       <Header/>
       <Intro/>
       <About/>
        <Routes>
          <Route path="/" element={<Projects/>}></Route>
        </Routes>
       <Skills/>
    </main>
    </Router>
  );
}

export default App;
