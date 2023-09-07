import './App.css';
import Header from './components/header';
import mainSvg from './assets/main.js'
import About from './components/about';

function App() {
  return (
    <div className="app-background">
      <Header/>
      <div className='main-svg'>
      {mainSvg()}
      </div>
      <About/>
    </div>
  );
}

export default App;
