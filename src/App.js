import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

class App extends React.Component {
  state = {
    job: {},
  };

  getJob = (job) => {
    this.setState({ job: job });
  };

  render() {
    return (
      <Container className="App h-100">
        <NavBar />
        <Route
          path="/"
          exact
          render={(props) => <HomePage {...props} getJob={this.getJob} />}
        />
        <Route
          path="/details/"
          render={(props) => <DetailPage {...props} job={this.state.job} />}
        />
      </Container>
    );
  }
}

export default App;
