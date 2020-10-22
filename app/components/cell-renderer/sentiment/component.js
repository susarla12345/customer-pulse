import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  sentimentBarWidth: computed('sentiment', function() {
    return htmlSafe(`width:${this.sentiment}%;`);
  }),
});