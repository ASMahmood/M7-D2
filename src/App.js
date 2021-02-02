import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Container className="App h-100">
      <NavBar />
      <Route path="/" exact component={HomePage} />
    </Container>
  );
}

export default App;
