import Component from '@ember/component';
import { computed } from '@ember/object';

const FEEDBACK = [{
  description: "The order Should have arrived on monday but i still have not received it, not i have received any status of my order",
  rating: 6,
  createdOn: new Date('Mon Nov 25 2019 12:00:41 GMT+0530 (India Standard Time)'),
  attributes: {
    'product-attributes': {
      'print-quality': 6
    },
    'logistics': {
      'delivery': 5,
      'speed': 5
    },
    'online-experience': {
      'easy-to-use': 10
    },
    'customer-care': {
      'helpdesk-software': 10,
      'email-response': 4
    }
  }
},
{
  description: "Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
  rating: 8,
  createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
  attributes: {
    'product-attributes': {
      'print-quality': 6
    },
    'logistics': {
      'delivery': 5,
      'speed': 5
    },
    'online-experience': {
      'easy-to-use': 10
    },
    'customer-care': {
      'helpdesk-software': 10,
      'email-response': 4
    }
  }
}
]

export default Component.extend({
  feedback: FEEDBACK
});