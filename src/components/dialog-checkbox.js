import React from 'react';
import io from 'socket.io';
class PollDialog extends React.Component {
    constructor(props) {
        super(props);
        var socket = new io.Socket();
        this.props.io = socket.connect('http://127.0.0.1:8080');
        let question = {
            answers: [{description: "yes"}, {description:"definately yes"}]
        };
        this.state = {
            question: question
        };
        io.sockets.emit("rawr!", {value: 0});
        io.sockets.on('rawr', function(json) {
            console.log(json);
            io.sockets.emit("rawr", {value: json.value + 1});
        })
    }
    render() {
        const parent = this;
        return (
            <section className="poll-container">
                <h1>Rawr</h1>
                {
                    parent.state.question.answers.map((item, index)=> {
                        let checkboxName = `chk-${index}`;
                        return <section key={index}>
                            <input type="checkbox" name={checkboxName}/>
                            <label htmlFor={checkboxName}>{item.description}</label>
                        </section>
                    })
                }
            </section>
        );
    }
}
export default PollDialog;