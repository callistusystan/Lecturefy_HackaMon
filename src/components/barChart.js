var BarChart = require("react-chartjs").Bar;
import React from 'react';

class BarChartCustom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data_values = [];
    let data_labels = [];
    console.log(this.props);
    this.props.answers.forEach(function (json_data) {
      data_values.push(json_data.poll_count);
      data_labels.push(json_data.description);
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
        <BarChart data={data} options={chartOptions}/>
    );
  }
}

export default BarChartCustom;

