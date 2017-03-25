import React, { Component } from 'react';
import { Glyphicon, Button, Jumbotron } from 'react-bootstrap';

class BoosterListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			booster: "",
			yes: 0,
			definitelyYes: 0,
			expanded: false
		};
	}

	componentDidMount() {
		this.setState({
			name: this.props.children
		});
	}

	onStartClick() {
		const {name} = this.state;
		if (name === "Hackamon Poll") {
			// emit hackamon poll start event
			this.props.socket.emit('start_question', { id: 0 });
		}
	}

	onStopClick() {
		const {name} = this.state;
		if (name === "Hackamon Poll") {
			// emit hackamon poll stop event
		}
	}

	renderBooster() {
		if (this.state.expanded) {
			const jumbotronStyle = { marginBottom: '0px', padding: '10px 0px' };
			const buttonPadStyle = { marginRight: '10px' };

			return (
				<Jumbotron style={jumbotronStyle}>
					{this.renderSpecificBooster()}
					<Button bsStyle='success' bsSize="large" style={buttonPadStyle} onClick={this.onStartClick.bind(this)}>Start Booster</Button>
					<Button bsStyle='danger' bsSize="large" onClick={this.onStopClick.bind(this)}>Stop Booster</Button>
				</Jumbotron>
			);
		}
	}

	renderSpecificBooster() {
		const {name} = this.state;
		if (name === "Hackamon Poll") {
			const { yes, definitelyYes } = this.state;
			return (
				<div>
				<h2 style={{marginTop: '0px'}}>Poll results:</h2>
				<p>Yes: {yes}</p>
				<p>Definitely Yes: {definitelyYes}</p>
				</div>
			);
		} else if (name === "Chat") {
			return (
				<div>
					<p>Enables chatting</p>
				</div>
			);
		} else if (name === "Poll") {
			return (
				<div>
					<p>Create a poll and ask everyone!</p>
				</div>
			);
		}
	}

	toggleExpand() {
		this.setState({
			expanded: !this.state.expanded
		});
		console.log(this.state.expanded);
	}

	render() {
		return (
			<div>
				<h4 onClick={this.toggleExpand.bind(this)}>
					{this.props.children} <Glyphicon glyph={this.props.icon}/>
				</h4>
				{this.renderBooster()}
			</div>
	  );
	}
}

export default BoosterListItem;
