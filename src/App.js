import './App.css';
import Header from "./components/header";
import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import Intro from './components/Introduction';

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
    
       <ContacMe/>
       <Footer/>
    </main>
  );
}

export default App;
