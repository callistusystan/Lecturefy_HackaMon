import React, { Component } from 'react';
import { Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import SlideView from './slideView';
import BoosterView from './boosterView';
import SocketIO from 'socket.io-client';
const containerStyle = { margin: '0% 5%', height: '100%', minHeight: '100%' };

function findAnswer(searched_id, question) {
    let selected_answer = null;
    question.answers.some((answer)=>{
        let found_answer = answer.id == searched_id;
        if(found_answer) {
            selected_answer = answer;
        }
        return found_answer;
    });
    return selected_answer;
}

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIO('http://118.138.41.192:1337');

    let question = {
        id: 0,
        description: "Do you think Pineapple Bae should win Hackamon?",
        answers: [
            {id: 1, description: "Yes!!", poll_count: 0, background_color: "#3272b7"},
            {id: 2, description: "Definitely Yes!!!", poll_count: 0, background_color: "#5cb85c"}
        ]
    };
    this.username = this.props.location.query.username;
    this.state = {
      isPresenter: false,
      hasEvent: false,
      question: question
    };

    this.socket.on('answer_update', (partial_answer_data)=> {
        console.log("AWER");
        this.onAnswerUpdate(partial_answer_data);
    });

    const parent = this;
    this.socket.on('show_question', (question) => {
      if (!parent.state.isPresenter) {
        parent.setState({
          hasEvent: true
        });
      }
    });

    this.socket.on('hide_question', (question) => {
      if (!parent.state.isPresenter) {
        parent.setState({
          hasEvent: false
        });
      }
    });
  }

  renderPollView() {
    const parent = this;
    return (
        <div >
          <h2>{this.state.question.description}</h2>
          <form className="form-group">
          {this.state.question.answers.map((answer)=> {
            return (
              <Button
                key={answer.id}
                onClick={parent.onPollButtonAnswerClick.bind(parent, answer)}
                bsStyle="success"
                style={{marginTop: '10px', width: '200px', backgroundColor: answer.background_color}}>
                {answer.description}
              </Button>
            );
          })}
          </form>
        </div>
    );
  }

  onAnswerUpdate(partial_answer_data) {
      console.log(partial_answer_data);
      let selected_answer = findAnswer(partial_answer_data.answer.id, this.state.question);
      if(selected_answer == null) {
          console.log(`Answer with id ${partial_answer_data.answer.id} was null`);
          return;
      }
      selected_answer.poll_count = partial_answer_data.answer.poll_count;
      this.setState({
        question: this.state.question
      });
      console.log(partial_answer_data);
  }
  onPollButtonAnswerClick(item, event) {
    this.socket.emit('answer_question', {username: this.username, question_id: this.state.question.id, answer_id: item.id});
    // TODO: MAYBE do this after we are told that the answer was succesfully posted???
    /*this.setState({
      hasEvent: false
    });*/
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
          <Col xs={6} sm={6} md={8}><div className="padding-md card-3"><SlideView socket={this.socket} isPresenter={this.state.isPresenter} /></div></Col>
          <Col xs={0} md={0} md={0} />
          <Col xs={6} sm={6} md={4}>{this.renderBoosterView()}</Col>
        </Row>
      </Grid>
    );
  }

  renderViewerView() {
    if (this.state.hasEvent) {
      return (
        <Grid fluid={true} style={containerStyle}>
          <Row>
            <Col xs={6} sm={6} md={8}>
                <div className="card-3">
                    <SlideView socket={this.socket} isPresenter={this.state.isPresenter} />
                </div>
            </Col>
            <Col xs={0} sm={0} md={0}/>
              <Col xs={6} sm={6} md={4}><div className="padding-md card-3">{this.renderPollView()}</div></Col>
          </Row>
        </Grid>
      );
    }
    return (
      <Grid fluid={true} style={containerStyle}>
        <Row>
          <Col style={{float: 'none', margin: '0 auto'}} xs={12} sm={10} md={8} lg={8} xl={8}>
              <div className="card-3">
                  <SlideView  socket={this.socket} isPresenter={this.state.isPresenter} />
              </div>
          </Col>
        </Row>
      </Grid>
    );
  }

  renderBoosterView() {
    if (this.state.isPresenter) {
      return (
        <BoosterView question={this.state.question} socket={this.socket} />
      );
    }
  }

  render() {
    return (
      <div className="main-container" style={{height:window.innerHeight}}>
        {this.renderSlideView()}
      </div>
    );
  }
}

export default Presentation;
