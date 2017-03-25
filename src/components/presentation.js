import React, { Component } from 'react';
import { Modal, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import FullScreen from 'react-fullscreen';

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

  renderSlideView() {
    if (this.state.isPresenter) {
      return this.renderPresenterView();
    }
    return this.renderViewerView();
  }

  renderPresenterView() {
    return (
      <Grid fluid={true} style={containerStyle}>
        <Row>
          <Col xs={7} md={7}><SlideView isPresenter={this.state.isPresenter} /></Col>
          <Col xs={1} md={1} />
          {this.renderBoosterView()}
        </Row>
      </Grid>
    );
  }

  renderViewerView() {
    return (
      <Grid fluid={true} style={containerStyle}>
        <Row>
          <Col xs={8} md={8}><SlideView isPresenter={this.state.isPresenter} /></Col>
          <Col xs={4} md={4} />
        </Row>
      </Grid>
    );
  }

  renderBoosterView() {
    if (this.state.isPresenter) {
      return (
        <Col xs={4} md={4}><BoosterView /></Col>
      );
    }
  }

  render() {
    return (
      <Jumbotron style={{height:window.innerHeight}}>
        {this.renderPresenterView()}
      </Jumbotron>
    );
  }
}

export default Presentation;
