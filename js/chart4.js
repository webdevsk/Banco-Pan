//plotelyjs
var x1Value = ['2018', '2019', '2020'];
var y1Value = [13.0, 15.6, 15.9];
var y1Valuestr = ['13,0%', '15,6%', '15,9%'];
var x2Value = ['2018', '2019', '2020'];
var y2Value = [4.096, 4.926, 5.317];



var trace1 = {
  x: x1Value,
  y: y1Value,
  type: 'scatter',
  text: y1Valuestr,
  mode: 'lines+markers+text',
  textposition: 'top',
  hoverinfo: 'none',
  marker: {
    color: '#000000',
    opacity: 1.0
  }
};
var trace2 = {
  x: x2Value,
  y: y2Value,
  type: 'bar',
  text: y2Value.map(String),
  textposition: 'outside',
  hoverinfo: 'none',
  marker: {
    color: '#03A9F4',
    opacity: 1.0
  }
};

var data = [trace1,trace2];
var layout = {
    autosize: 'true',
    plot_bgcolor:"#F5F5F5",
    paper_bgcolor:"#F5F5F5",
    xaxis:{autotick: false},
    margin: {t:50,b:50,l:0,r:0},
    font: {size: 14},
    showlegend: false,
    yaxis: {
        autorange: true,
        showgrid: false,
        // range: [3.5,6],
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    }
};

var config = {responsive: true, displayModeBar: false, staticPlot: true};

Plotly.newPlot('myDiv4', data, layout, config);