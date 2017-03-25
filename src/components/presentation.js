import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import SlideView from './slideView';
import BoosterView from './boosterView';

const containerStyle = { margin: '0% 5%', height: '100%', minHeight: '100%' };

class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPresenter: false
    };
  }

  componentWillMount() {
    if (this.props.location.query.username == "lketchup") {
      this.setState({
        isPresenter: true
      });
    }
  }

  renderView() {
    return (
      <Grid fluid={true} style={containerStyle}>
        <Row>
          <Col xs={6} md={6}><SlideView isPresenter={this.state.isPresenter} /></Col>
          <Col xs={2} md={1} />
          {this.renderBoosterView()}
        </Row>
      </Grid>
    );
  }

  renderBoosterView() {
    if (this.state.isPresenter) {
      return (
        <Col xs={4} md={5}><BoosterView /></Col>
      );
    }
  }

  renderViewerView() {
    return (
      <Grid fluid={true} style={containerStyle}>
        <SlideView isPresenter={this.state.isPresenter} />
      </Grid>
    );
  }

  render() {
    return (
      <Jumbotron style={{height:window.innerHeight}}>
        {this.renderView()}
      </Jumbotron>
    );
  }
}

export default Presentation;
