import React, { Component } from "react";
import { Row, Col, Form, Button, CardColumns } from "react-bootstrap";
import JobListing from "./JobListing";

export default class HomePage extends Component {
  state = {
    job: "",
    location: "",
    validated: false,
    jobList: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      this.fetchJobs();
    }
    this.setState({ validated: true });
  };

  fetchJobs = async () => {
    try {
      let response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.job}&location=${this.state.location}`
      );
      let jobList = await response.json();
      this.setState({ jobList: jobList });
      console.log(jobList);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Row className="homepage">
        <Col xs={6} className="formCol">
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={(e) => this.handleSubmit(e)}
            className="searchForm"
          >
            <Form.Group controlId="formJobTitle">
              <Form.Control
                required
                type="text"
                placeholder="Job Title"
                value={this.state.job}
                onChange={(e) => this.setState({ job: e.currentTarget.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please include a job title
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formJobLocation">
              <Form.Control
                required
                type="text"
                placeholder="Location"
                value={this.state.location}
                onChange={(e) =>
                  this.setState({ location: e.currentTarget.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please provide the location you would like to search
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" className="submitJob w-100" type="submit">
              Search for your new job
            </Button>
          </Form>
          <div className="bg-colour-change"></div>
        </Col>
        <Col xs={6} className="listCol">
          <CardColumns className="w-100">
            {this.state.jobList.length > 0 &&
              this.state.jobList.map((job, index) => (
                <JobListing job={job} top={index} key={index} />
              ))}
          </CardColumns>
        </Col>
        <svg
          className="globeIcon"
          height="1024"
          width="1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 128c-212.077 0-384 171.923-384 384s171.923 384 384 384c25.953 0 51.303-2.582 75.812-7.49-9.879-4.725-10.957-40.174-1.188-60.385 10.875-22.5 45-79.5 11.25-98.625s-24.375-27.75-45-49.875-12.19-25.451-13.5-31.125c-4.5-19.5 19.875-48.75 21-51.75s1.125-14.25 0.75-17.625S545.75 566.75 542 566.375s-5.625 6-10.875 6.375-28.125-13.875-33-17.625-7.125-12.75-13.875-19.5-7.5-1.5-18-5.625-44.25-16.5-70.125-27-28.125-25.219-28.5-35.625-15.75-25.5-22.961-36.375c-7.209-10.875-8.539-25.875-11.164-22.5s13.5 42.75 10.875 43.875-8.25-10.875-15.75-20.625 7.875-4.5-16.125-51.75 7.5-71.344 9-96 20.25 9 10.5-6.75 0.75-48.75-6.75-60.75S275 230 275 230c1.125-11.625 37.5-31.5 63.75-49.875s42.281-4.125 63.375 2.625 22.5 4.5 15.375-2.25 3-10.125 19.5-7.5 21 22.5 46.125 20.625 2.625 4.875 6 11.25-3.75 5.625-20.25 16.875S469.25 233 498.5 254.375s20.25-14.25 17.25-30S537.125 221 537.125 221c18 12 14.674 0.66 27.799 4.785S613.625 260 613.625 260c-44.625 24.375-16.5 27-9 32.625s-15.375 16.5-15.375 16.5c-9.375-9.375-10.875 0.375-16.875 3.75s-0.375 12-0.375 12c-31.031 4.875-24 37.5-23.625 45.375s-19.875 19.875-25.125 31.125S536.75 437 527 438.5s-19.5-36.75-72-22.5c-15.828 4.297-51 22.5-32.25 59.625s49.875-10.5 60.375-5.25-3 28.875-0.75 29.25 29.625 1.031 31.125 33 41.625 29.25 50.25 30 37.5-23.625 41.625-24.75S626 522.875 662 543.5s54.375 17.625 66.75 26.25 3.75 25.875 15.375 31.5 58.125-1.875 69.75 17.25-48 115.125-66.75 125.625S719.75 778.625 701 794s-45 34.406-69.75 49.125c-21.908 13.027-25.85 36.365-35.609 43.732C767.496 848.68 896 695.35 896 512 896 299.923 724.077 128 512 128zM602 488.375c-5.25 1.5-16.125 11.25-42.75-4.5s-45-12.75-47.25-15.375c0 0-2.25-6.375 9.375-7.5 23.871-2.311 54 22.125 60.75 22.5s10.125-6.75 22.125-2.883C616.25 484.48 607.25 486.875 602 488.375zM476.375 166.25c-2.615-1.902 2.166-4.092 5.016-7.875 1.645-2.186 0.425-5.815 2.484-7.875 5.625-5.625 33.375-13.5 27.949 1.875C506.4 167.75 480.5 169.25 476.375 166.25zM543.5 215c-9.375-0.375-31.443-2.707-27.375-6.75 15.844-15.75-6-20.25-19.5-21.375S477.5 178.25 484.25 177.5s33.75 0.375 38.25 4.125 28.875 13.5 30.375 20.625S552.875 215.375 543.5 215zM624.875 212.375c-7.5 6-45.24-21.529-52.5-27.75-31.5-27-48.375-18-54.99-22.5-6.617-4.5-4.26-10.5 5.865-19.5s38.625 3 55.125 4.875 35.625 14.625 36 29.781C614.75 192.43600000000004 632.375 206.375 624.875 212.375z" />
        </svg>
      </Row>
    );
  }
}
