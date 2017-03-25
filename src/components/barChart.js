var BarChart = require("react-chartjs").Bar;
import React from 'react';

class BarChartCustom extends React.Component {
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
    // props.answers
  }
  // data = props.ans

  render() {
    let data_values = [];
    let data_labels = [];
    console.log(this.props);
    this.props.answers.forEach(function (json_data) {
      data_values.append(json_data.poll_count);
      data_labels.append(json_data.description);
    });

    var data = {
      labels: data_labels,
      datasets: [
        {
          // label: "My First dataset",
          fillColor: ["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)","rgba(220,0,0,0.5)","rgba(120,250,120,0.5)", "rgba(120,250,120,0.5)" ],
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          borderWidth: 1,
          data: data_values,
        }
      ]
    };

    let chartOptions = {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    };
    //const parent = this;
    return (
      <section className="barchart">
        <h1>My Chart Here</h1>
        <BarChart data={data} options={chartOptions} width="1000" height="500"/>
      </section>
    );
  }
}

export default BarChartCustom;

