import Table from 'ember-light-table';
import Component from '@ember/component';
import{ computed } from '@ember/object';

const THEMES = [{
    type: 'Product attributes',
    netSentiment: 66,
    mentions: 48600,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 5
},
{
    type: 'Logistics',
    netSentiment: 66,
    mentions: 48600,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 5
},
{
    type: 'Online experience',
    netSentiment: 66,
    mentions: 48600,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 5
},
{
    type: 'customer care',
    netSentiment: 66,
    mentions: 48600,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 5
},
{
    type: 'Build attributes',
    netSentiment: 66,
    mentions: 48600,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 5
}]

const columns = [{
    label: 'Themes',
    valuePath: 'themes',
    cellComponent: 'cell-renderer'
  },
  {
    label: 'Sentiment',
    valuePath: 'sentiment',
    cellComponent: 'cell-renderer'
  },
  {
    label: 'Net sentiment',
    valuePath: 'netSentiment',
    cellComponent: 'cell-renderer'
  },
  {
      label: 'Mentions',
      valuePath: 'mentions',
      cellComponent: 'cell-renderer'
  }
]

export default Component.extend({
    model: THEMES,
    columns: columns,
    // table: computed(function() {
    //     return new Table(this.columns, this.model, { enableSync: true });
    // })

    init() {
        this._super(...arguments);
        let table = new Table(this.columns, this.model);
        this.set('table', table);
      }
})