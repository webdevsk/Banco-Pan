//plotelyjs
var xValue = ['2017', '2018', '2019', '2020'];
var yValue = [18.6, 20.6, 23.8, 28.9];
var yValuestr = ['18,6', '20,6', '23,8', '28,9'];



var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValuestr,
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
    xaxis:{autotick: false},
    margin: {t:50,b:50,l:0,r:0},
    font: {size: 14},
    showlegend: false,
    yaxis: {
        autorange: false,
        showgrid: false,
        range: [10,33],
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    }
};

var config = {responsive: true, displayModeBar: false, staticPlot: true};

Plotly.newPlot('myDiv2', data, layout, config);