import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class DetailPage extends Component {
  htmlDesc = () => {
    return { __html: this.props.job.description };
  };
  htmlApply = () => {
    return { __html: this.props.job.how_to_apply };
  };

  render() {
    return (
      <>
        <Row className="homepage2">
          <Col xs={12}>
            <h1 className="jobTitle">{this.props.job.title}</h1>
          </Col>
          <Col xs={12}>
            <h4>
              {this.props.job.location}, {this.props.job.type}
            </h4>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12}>
            <div dangerouslySetInnerHTML={this.htmlDesc()} />
          </Col>
        </Row>
        <Row className="bg-colour-change2 ">
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h4>{this.props.job.company}</h4>
          </Col>
        </Row>
      </>
    );
  }
}
