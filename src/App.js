import './App.css';


import About from './components/about';
import Contact from './components/contact';
import Main from './components/main';
import Projects from './components/projects';

function App() {
  return (
    <div className="app-background">
      <Main />
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
