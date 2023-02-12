import logo from "./logo.svg";
import "./styles/App.scss";
import { Collapse } from 'reactstrap';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { useToggle } from "./hooks/useToggle";

function App(props) {
  const [showAbout, toggleAbout] = useToggle(false);
  return (
    <>
      <Header toggleAbout={toggleAbout} showAbout={showAbout} />
      <MainBody toggleAbout={toggleAbout} showAbout={showAbout} />
      <Footer />
    </>
  );
}

function MainBody(props) {
  return (
    <div className="App">
      <Collapse isOpen={props.showAbout}>
        <About closePage={props.toggleAbout} />
      </Collapse>
      <Collapse isOpen={!props.showAbout}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Pardon the dust! Work in progress.</p>
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
      </Collapse>
    </div>
  );
}

export default App;
