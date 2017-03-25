  import React, { Component } from 'react';
import { Button, Modal, Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import SlideView from './slideView';
import BoosterView from './boosterView';
import SocketIO from 'socket.io-client';
const containerStyle = { margin: '0% 5%', height: '100%', minHeight: '100%' };

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIO('http://118.138.41.192:1337');
    this.state = {
      isPresenter: false,
      hasEvent: true
    };
  }

  renderPollView() {
    return (
      <Col xs={4} md={4}>
        <Jumbotron>
          <h2>Do you think Pineapple Bae should win Hackamon?</h2>
          <Button onClick={this.onYesClick.bind(this)} style={{width: '200px'}} bsStyle='primary' bsSize="large">Yes!!!</Button>
          <br />
          <Button onClick={this.onDefinitelyYesClick.bind(this)} style={{marginTop: '10px', width: '200px'}} bsStyle='success' bsSize="large">Definitely Yes!!!</Button>
        </Jumbotron>
      </Col>
    );
  }

  onYesClick() {
    // emit yes clicked
    this.setState({
      hasEvent: false
    });
  }

  onDefinitelyYesClick() {
    // emit definitely yes clicked
    this.setState({
      hasEvent: false
    });
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
          <Col xs={7} md={7}><SlideView socket={this.socket} isPresenter={this.state.isPresenter} /></Col>
          <Col xs={1} md={1} />
          {this.renderBoosterView()}
        </Row>
      </Grid>
    );
  }

  renderViewerView() {
    if (this.state.hasEvent) {
      return (
        <Grid fluid={true} style={containerStyle}>
          <Row>
            <Col xs={7} md={7}><SlideView socket={this.socket} isPresenter={this.state.isPresenter} /></Col>
            <Col xs={1} md={1} />
            {this.renderPollView()}
          </Row>
        </Grid>
      );
    }
    return (
      <Grid fluid={true} style={containerStyle}>
        <Row>
          <Col style={{float: 'none', margin: '0 auto'}} xs={7} md={7}><SlideView socket={this.socket} isPresenter={this.state.isPresenter} /></Col>
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
        {this.renderSlideView()}
      </Jumbotron>
    );
  }
}

export default Presentation;
