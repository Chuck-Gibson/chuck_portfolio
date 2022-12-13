import './App.css';
import Header from "./components/header";
import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import Intro from './components/Introduction';
import SideWrapper from './components/sideWrapper';

function App() {

  return (
    
    <main className="App">
       <Header/>
       <Intro/>
       <About/>
       <Projects/>
       <Skills/>
       <SideWrapper/>
    </main>
  );
}

export default App;
