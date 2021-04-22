//plotelyjs
var xValue = ['1', '2', '3', '4', '5', '6','7'];
var yValue = [415, 286, 221, 146, 270, 1992, 135];



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
    xaxis:{autotick: true},
    margin: {t:10,b:10,l:0,r:0},
    font: {size: 14},
    showlegend: false,
    yaxis: {
        autorange: false,
        showgrid: false,
        range: [1,2100],
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    xaxis: {
        autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    }
};

var config = {responsive: true, displayModeBar: false, staticPlot: true};

Plotly.newPlot('myDiv5', data, layout, config);