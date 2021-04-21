import './stylesheets/App.css';
import LandingPage from './components/landingPage';

const App = () => {
  return (
    <div className="App">
      <LandingPage data-testid='landingPage'/> 
    </div>
  );
}

export default App;
