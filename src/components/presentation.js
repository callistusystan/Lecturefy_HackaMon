import React, { Component } from 'react';
import { Button, Modal, Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import SlideView from './slideView';
import BoosterView from './boosterView';
import SocketIO from 'socket.io';
const containerStyle = { margin: '0% 5%', height: '100%', minHeight: '100%' };

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIO('http://localhost:1337');
    this.state = {
      isPresenter: false
    };
  }

  renderPollModal() {
    // modal
    return (
      <Modal.Dialog>
        <h2>Do you think Pineapple Bae should win Hackamon?</h2>
        <Button>Yes</Button>
        <br />
        <Button>DefinitelyYes</Button>
      </Modal.Dialog>
    );
  }

  onYesClick() {
    // emit yes clicked
  }

  onDefinitelyYesClick() {
    // emit definitely yes clicked
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
    return (
      <Grid fluid={true} style={containerStyle}>
        <Row>
          <Col xs={7} md={7}><SlideView socket={this.socket} isPresenter={this.state.isPresenter} /></Col>
          <Col xs={1} md={1} />
          <Col xs={4} md={4}>{this.renderPollModal()}</Col>
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
