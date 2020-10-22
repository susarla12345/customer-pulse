import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
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
});