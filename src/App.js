import logo from './logo.svg';
import './styles/App.scss';
import Header from './components/header/Header';

function App(props) {
  return (
    <>
        <Header/>
        <MainBody/>
    </>
  );
}

function MainBody() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Pardon the dust! Work in progress.
      </p>
      <p>
        <a
          className="App-link"
          href="https://github.com/eastofeaston"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
         &bull; 
        <a
          className="App-link"
          href="https://www.linkedin.com/in/rye-easton/"
          target="_blank"
          rel="noopener noreferrer"
        >
        LinkedIn
        </a>
      </p>
    </header>
  </div>
  )
}

export default App;
