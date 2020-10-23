import Component from '@ember/component';
import{ computed } from '@ember/object';

export default Component.extend({
  tags: computed('attributes', function() { 
    let { attributes } = this;
    let tags = [];
    Object.keys(attributes).forEach((attribute) => {
      Object.keys(attributes[attribute]).forEach((attr) => {
        tags.pushObject({
          parent: attribute,
          child: attr,
          value: attributes[attribute][attr],
          class: this._getTagClass(attributes[attribute][attr])
        })
      });
    })

    return tags
  }),

  _getTagClass(value) {
    if(value > 5) {
      return 'tag-wrapper--positive'
    } else if(value < 5) {
      return 'tag-wrapper--negative'
    } else {
      return 'tag-wrapper--neutral'
    }
  }
});