import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import SlideView from './slideView';
import BoosterView from './boosterView';

const containerStyle = { margin: '0 5%'};
const maxHeightStyle = { height: '100%', minHeight: '100%' };

class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPresenter: false //(this.props.params.username.equals("lketchup") === true) ? true : false
    };
  }

  renderPresenterView() {
    return (
      <Grid fluid={true} style={containerStyle}>
        <Row>
          <Col xs={6} md={6}><SlideView /></Col>
          <Col xs={2} md={2} />
          <Col xs={4} md={4}><BoosterView /></Col>
        </Row>
      </Grid>
    );
  }

  renderViewerView() {
    return (
      <Grid fluid={true} style={containerStyle}>
        <SlideView style={maxHeightStyle} />
      </Grid>
    );
  }

  render() {

    return (
      <Jumbotron>
        {(this.state.isPresenter) ? this.renderPresenterView() : this.renderViewerView()}
      </Jumbotron>
    );
  }
}

export default Presentation;
