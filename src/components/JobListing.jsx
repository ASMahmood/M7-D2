import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class JobListing extends Component {
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
          <Button>See more</Button>
        </Card.Body>
      </Card>
    );
  }
}
