import React, { Component } from 'react';
import { Button, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import SearchBar from './searchBar';

const noPaddingStyle={padding: 0};

class BoosterView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boosters: [],
      booster: ""
    };
  }

  renderListGroupItems() {
    const { boosters } = this.state;

    return (boosters.map(booster => {
      return (
        <ListGroupItem key={booster}>{booster}</ListGroupItem>
      );
    }));
  }

  onBoosterChange(event) {
    this.setState({
      booster: event.target.value
    });
  }

  addBooster() {
    const { booster, boosters } = this.state;
    if (boosters.indexOf(booster) === -1 ) {
      let newBoosters = boosters.splice();
      newBoosters.push(booster);
      this.setState({
        boosters: newBoosters
      });
    }
  }

  renderBoosters() {
    const { boosters } = this.state;
    if (boosters.length === 0) {
      return (
        <h2>No boosters at the moment.</h2>
      );
    }
    return (
      <div>
        <h2>Current boosters</h2>

        <ListGroup>
          {this.renderListGroupItems()}
        </ListGroup>
      </div>
    );
  }

  render() {
    const headerStyle = {marginTop: '0'};
    return (
      <div>
        <Row >
          <Col xs={10} md={10} style={noPaddingStyle} onChange={this.onBoosterChange.bind(this)}><SearchBar /></Col>
          <Col xs={2} md={2} style={noPaddingStyle}><Button onClick={this.addBooster.bind(this)}>Add booster</Button></Col>
        </Row>

        {this.renderBoosters()}

      </div>
    );
  }
}

export default BoosterView;
