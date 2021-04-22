//plotelyjs
var x1Value = ['2017', '2018', '2019', '2020'];
var y1Value = [842, 838, 940, 1295];
var x2Value = ['2017', '2018', '2019', '2020'];
var y2Value = [298, 347, 459, 576];
var x3Value = ['2017', '2018', '2019', '2020'];
var y3Value = [269, 268, 307, 500];
var x4Value = ['2017', '2018', '2019', '2020'];
var y4Value = [10, 10, 10, 10];
var totalValue = [1409, 1454, 1707, 2370];


var trace1 = {
  x: x1Value,
  y: y1Value,
  name:'Consignado (emp. + Cartão)',
  type: 'bar',
  text: y1Value.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: '#03A9F4',
    opacity: 1.0
  }
};
var trace2 = {
  x: x2Value,
  y: y2Value,
  name:'Veículos',
  type: 'bar',
  text: y2Value.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: '#0288D1',
    opacity: 1.0
  }
};
var trace3 = {
  x: x3Value,
  y: y3Value,
  name:'Cartão de Crédito',
  type: 'bar',
  text: y3Value.map(String),
  textposition: 'auto',
  hoverinfo: 'auto',
  marker: {
    color: '#414141',
    opacity: 1.0
  }
};
var trace4 = {
  x: x4Value,
  y: y4Value,
  name:'Cartão de Crédito',
  type: 'bar',
  text: totalValue,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: '#FFFFFF',
    opacity: 1.0
  }
};

var data = [trace1, trace2, trace3, trace4];

var layout = {
  barmode: 'stack',
  autosize: 'true',
  xaxis:{autotick: false},
  margin: {t:50,b:50,l:0,r:0},
  font: {size: 14},
  showlegend: false,
  yaxis: {
      autorange: false,
      showgrid: false,
      range: [100,2600],
      zeroline: false,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
  }
};

var config = {responsive: true, displayModeBar: false, staticPlot: true};

Plotly.newPlot('myDiv1', data, layout, config);