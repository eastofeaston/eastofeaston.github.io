import logo from "./logo.svg";
import "./styles/App.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App(props) {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
}

function MainBody() {
  return (
    <div className="App">
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
            <FaGithub className={"App-link-logo"} />
          </a>
          &bull;
          <a
            className="App-link"
            href="https://www.linkedin.com/in/rye-easton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={"App-link-logo"} />
          </a>
          &bull;
          <a
            className="App-link"
            href="https://www.twitter.com/eastofeaston"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={"App-link-logo"} />
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
