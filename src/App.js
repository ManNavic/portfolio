import './App.css';
import Header from './components/header';
import mainSvg, {ReactComponent as MainSvg} from './assets/main.js'

function App() {
  return (
    <div className="app-background">
      <Header/>
      <div className='main-svg'>
      {mainSvg()}
      </div>
    </div>
  );
}

export default App;
