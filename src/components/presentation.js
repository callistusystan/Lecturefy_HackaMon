import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import SlideView from './slideView';
import BoosterView from './boosterView';

class Presentation extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Jumbotron>
        <Grid fluid={true}>
          <Row>
            <Col xs={6} md={6}><SlideView /></Col>
            <Col xs={6} md={6}><BoosterView /></Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

export default Presentation;
