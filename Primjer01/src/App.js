//import logo from './logo.svg';
import logo from './AVL_logo_logotype.png';
import background from './background.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Dobrodošli na Lumen Development AVL radionicu!</b>
        </p>
      </header>
    </div>
  );
}

export default App;
