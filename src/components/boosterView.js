import React, { Component } from 'react';
import { Button, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import SearchBar from './searchBar';
import BoosterListItem from './boosterListItem';
const noPaddingStyle={padding: 0};
const noPaddingStyleRightMargin={padding: 0, marginRight: 10};

import '../css/search-bar-page.css';
const validBoosters = ["Chat", "Poll", "Hackamon Poll"];

class BoosterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boosters: [],
            booster: {icon:"",
                name:""}
        };
    }

    renderListGroupItems() {
        const { boosters } = this.state;

        return (boosters.map(booster => {
            return (
                <ListGroupItem key={booster.name}>
                    <BoosterListItem question={this.props.question} socket={this.props.socket} icon={booster.icon}>{booster.name}</BoosterListItem>
                </ListGroupItem>

            );
        }));
    }

    onBoosterChange(event){
        let name = event.target.value;
        let icon = "";
        this.setState({
            booster: event.target.value
        });
    }
    onSearchSuggestionClicked(event, data) {
        this.setState({booster:{icon:data.icon, name:data.name}});
    }
    addBooster() {
        const { booster, boosters} = this.state;
        if (validBoosters.indexOf(booster.name) >= 0 && boosters.indexOf(booster) === -1 ) {
            let newBoosters = boosters.slice();
            newBoosters.push(booster);
            console.log(newBoosters);
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
        return (
            <div className="container-fluid card-3">
                <div className="padding-md">
                    <Row>
                        <Col xl={4} sm={6} md={7} style={noPaddingStyle} onChange={this.onBoosterChange.bind(this)}>
                            <div style={{marginRight:10}}>
                            <SearchBar  onSuggestionSelected={this.onSearchSuggestionClicked.bind(this)}/>
                            </div>
                        </Col>
                        <Col xl={8} sm={6} md={5} style={noPaddingStyle}>
                            <Button className="w-match-parent" onClick={this.addBooster.bind(this)}>Add booster</Button>
                        </Col>
                    </Row>
                    <Row>
                        {this.renderBoosters()}
                    </Row>
                </div>
            </div>
        );
    }
}

export default BoosterView;
