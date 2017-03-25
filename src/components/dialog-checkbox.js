import React from 'react';
import SocketIO from 'socket.io-client';

function findAnswer(searched_id, question) {
    let selected_answer = null;
    question.answers.some((answer)=>{
        let found_answer = answer.id == searched_id;
        if(found_answer) {
            selected_answer = answer;
        }
        return found_answer;
    })
    return selected_answer;
}
class PollDialog extends React.Component {
    constructor(props) {
        super(props);
        const parent = this;
        let question = {
            id: 0,
            answers: [
                {id: 1, description: "yes", poll_count: 0},
                {id: 2, description: "definately yes", poll_count: 0}
            ]
        };
        parent.state = {
            question: question
        };
        // SOCKET IO SHOT======
        this.socket = SocketIO('http://localhost:1337');
        this.socket.on('answer_update', (partial_answer_data)=> {
            this.onAnswerUpdate(partial_answer_data);
        })
    }
    onAnswerUpdate(partial_answer_data) {
        console.log(partial_answer_data);
        let selected_answer = findAnswer(partial_answer_data.answer.id, this.state.question);
        if(selected_answer == null) {
            console.log(`Answer with id ${partial_answer_data.answer.id} was null`);
            return;
        }
        selected_answer.poll_count = partial_answer_data.answer.poll_count
        this.setState({
          question: this.state.question
        });
    }

    onSelectOption(item, event) {
        console.log(item);
        let username = "test"; //this.props.username;
        this.socket.emit('answer_question', {username: username, question_id: this.state.question.id, answer_id: item.id});
    }

    render() {
        const parent = this;
        return (
            <section className="poll-container">
                <h1>Rawr</h1>
                <form className="form-group">
                {
                    parent.state.question.answers.map((item, index)=> {
                        let checkboxName = `chk-${index}`;
                        return <section key={item.id}>
                            <input type="radio" name={checkboxName} checked={this.state.selectedOption == index} onChange={this.onSelectOption.bind(this, item)}/>
                            <label htmlFor={checkboxName}>{item.description}</label>
                        </section>
                    })
                }
                </form>
            </section>
        );
    }
}
export default PollDialog;
