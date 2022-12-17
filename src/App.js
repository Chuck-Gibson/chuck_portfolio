import './App.css';
import Header from "./components/header";
import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import Intro from './components/Introduction';
import SideWrapper from './components/sideWrapper.js'
import Footer from './components/footer';
import ContacMe from './components/contactMe';

function App() {

  return (
    
    <main className="App">
       <Header/>
       <Intro/>
       <About/>
       <Skills/>
       <Projects/>
       <SideWrapper/>
       <ContacMe/>
       <Footer/>
    </main>
  );
}

export default App;
