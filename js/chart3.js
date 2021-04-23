//plotelyjs
var xValue = ['2017', '2018', '2019', '2020'];
var yValue = [213, 222, 516, 656];



var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'outside',
  hoverinfo: 'none',
  marker: {
    color: '#03A9F4',
    opacity: 1.0
  }
};

var data = [trace1];

var layout = {
    autosize: 'true',
    plot_bgcolor:"#F5F5F5",
    paper_bgcolor:"#F5F5F5",
    xaxis:{autotick: false},
    margin: {t:50,b:50,l:0,r:0},
    font: {size: 14},
    showlegend: false,
    yaxis: {
        autorange: false,
        showgrid: false,
        range: [100,700],
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    }
};

var config = {responsive: true, displayModeBar: false, staticPlot: true};

Plotly.newPlot('myDiv3', data, layout, config);