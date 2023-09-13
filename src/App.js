import './App.css';
import Header from './components/header';

import About from './components/about';
import Main from './components/main';

function App() {
  return (
    <div className="app-background">
      <Header/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
