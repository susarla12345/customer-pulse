import Component from '@ember/component';
const chartOptions = {
  chart: {
  plotBackgroundColor: null,
  plotBorderWidth: null,
  plotShadow: false,
  type: 'pie',
  width: 450,
  height: 450
},
title: {
  text: 'Customer sentiment'
},
tooltip: {
  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
accessibility: {
  point: {
      valueSuffix: '%'
  }
},
plotOptions: {
  pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
  }
},
series: [{
  name: 'Brands',
  colorByPoint: true,
  data: [{
      name: 'Positive',
      y: 60,
      color: '#007958'
  }, {
      name: 'Negative',
      y: 30,
      color: '#c82124'
  }, {
      name: 'Neutral',
      y: 10,
      color: '#475867'
  }]
}]
}

export default Component.extend({
  chartOptions
})

