import Table from 'ember-light-table';
import Component from '@ember/component';
import{ computed } from '@ember/object';

// const THEMES = [{
//     type: 'Product attributes',
//     netSentiment: 66,
//     mentions: 48600,
//     weight: 56.6,
//     deltaIncrease: true,
//     deltaValue: 5
// },
// {
//     type: 'Logistics',
//     netSentiment: 92,
//     mentions: 249,
//     weight: 56.6,
//     deltaIncrease: true,
//     deltaValue: 25
// },
// {
//     type: 'Online experience',
//     netSentiment: 45,
//     mentions: 678,
//     weight: 56.6,
//     deltaIncrease: false,
//     deltaValue: 15
// },
// {
//     type: 'customer care',
//     netSentiment: 0,
//     mentions: 16300,
//     weight: 56.6,
//     deltaIncrease: false,
//     deltaValue: 17
// },
// {
//     type: 'Build attributes',
//     netSentiment: -20,
//     mentions: 5200,
//     weight: 56.6,
//     deltaIncrease: true,
//     deltaValue: 2
// }]

const type_themes = [
  {
    type: 'Product attributes',
    name: 'cost',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Product attributes',
    name: 'Easy to use',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Product attributes',
    name: 'Design',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Online experience',
    name: 'Easy of use',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Online experience',
    name: 'Customer service',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Online experience',
    name: 'Errors',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Online experience',
    name: 'Mobile app',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Build attributes',
    name: 'Finishing',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Build attributes',
    name: 'Accessibility',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Build attributes',
    name: 'Accuracy',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'customer care',
    name: 'Helpdesk software',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'customer care',
    name: 'Email response',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'customer care',
    name: 'Phone channel response',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Logistics',
    name: 'On time delivery',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  },

  {
    type: 'Logistics',
    name: 'Quality of delivery',
    netSentiment: -20,
    mentions: 5200,
    weight: 56.6,
    deltaIncrease: true,
    deltaValue: 2
  }
  
]

const columns = [{
    label: 'Themes',
    valuePath: 'themes',
    cellComponent: 'cell-type-renderer',
    width: '20%'
  },
  {
    label: 'Sentiment',
    valuePath: 'sentiment',
    cellComponent: 'cell-type-renderer',
    width: '20%'
  },
  {
    label: 'Net sentiment',
    valuePath: 'netSentiment',
    cellComponent: 'cell-renderer',
    width: '10%'
  },
  {
      label: 'Mentions',
      valuePath: 'mentions',
      cellComponent: 'cell-type-renderer',
      width: '20%'
  },
  {
    label: 'Weight',
    valuePath: 'weight',
    cellComponent: 'cell-type-renderer',
    width: '10%'
},
{
    label: 'Delta',
    valuePath: 'delta',
    cellComponent: 'cell-type-renderer',
    width: '20%'
}
]

export default Component.extend({
    model: computed('type', function() {
      return type_themes.filterBy('type', this.type);
    }),
    columns: columns,
    table: computed(function() {
        return new Table(this.columns, this.model, { enableSync: true });
    })
})