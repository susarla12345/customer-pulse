import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import Table from 'ember-light-table';


const TYPE_THEMES = [{
  type: 'Product attributes',
  netSentiment: 66,
  mentions: 48600,
  weight: 56.6,
  deltaIncrease: true,
  deltaValue: 5
},
{
  type: 'Logistics',
  netSentiment: 92,
  mentions: 249,
  weight: 56.6,
  deltaIncrease: true,
  deltaValue: 25
},
{
  type: 'Online experience',
  netSentiment: 45,
  mentions: 678,
  weight: 56.6,
  deltaIncrease: false,
  deltaValue: 15
},
{
  type: 'customer care',
  netSentiment: 0,
  mentions: 16300,
  weight: 56.6,
  deltaIncrease: false,
  deltaValue: 17
},
{
  type: 'Build attributes',
  netSentiment: -20,
  mentions: 5200,
  weight: 56.6,
  deltaIncrease: true,
  deltaValue: 2
}]

const columns = [{
  valuePath: 'themes',
  cellComponent: 'cell-type-renderer',
  width: '20%'
},
{
  valuePath: 'sentiment',
  cellComponent: 'cell-type-renderer',
  width: '20%'
},
{
  valuePath: 'netSentiment',
  cellComponent: 'cell-type-renderer',
  width: '10%'
},
{
    valuePath: 'mentions',
    cellComponent: 'cell-type-renderer',
    width: '20%'
},
{
  valuePath: 'weight',
  cellComponent: 'cell-type-renderer',
  width: '10%'
},
{
  valuePath: 'delta',
  cellComponent: 'cell-type-renderer',
  width: '20%'
}];

export default Component.extend({
  showTable: false,
  rows: TYPE_THEMES,
  columns,
  formattedMentions: computed('row.mentions', function() {
    let value = get(this, 'row.mentions');
    return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + ' k' : Math.sign(value)*Math.abs(value);
  }),

  sentimentClass: computed('row.netSentiment', function() {
    return get(this, 'row.netSentiment') > 0 ? 'sentiment--green' : 'sentiment--red';
  }),

  deltaClass: computed('row.deltaIncrease', function() {
    return get(this, 'row.deltaIncrease') ? 'sentiment--green' : 'sentiment--red';
  }),

  table: computed(function() {
    return new Table(this.columns, this.model, { enableSync: true });
  }),

  actions: {
    showTypes(type) {
      set(this, 'showTable', true);
    }
  }
});