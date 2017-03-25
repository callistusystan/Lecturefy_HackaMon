import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class Presentation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Col xs={6} md={6}>something</Col>
            <Col xs={6} md={6}>something else</Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

export default Presentation;
