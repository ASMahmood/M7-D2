import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class JobListing extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getJob(this.props.job);
    this.props.history.push("/details/");
  };
  render() {
    return (
      <Card className="w-100 text-center">
        {console.log(this.props.top)}
        <Card.Img
          variant="top"
          className="p-2"
          src={this.props.job.company_logo}
        />
        <Card.Body>
          <Card.Title className="jobTitleCard">
            {this.props.job.title}
          </Card.Title>
          <Card.Text>
            {this.props.job.location}, {this.props.job.type}
          </Card.Text>
          <Button onClick={(e) => this.handleSubmit(e)}>See more</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default withRouter(JobListing);
