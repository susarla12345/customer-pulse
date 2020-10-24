import Component from '@ember/component';
import { computed, set } from '@ember/object';

const FEEDBACK = {
  1: [{
    description: "The order Should have arrived on monday but i still have not received it, not i have received any status of my order",
    rating: 10,
    createdOn: new Date('Mon Nov 25 2019 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 5,
    createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 7,
    createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 2,
    createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 4,
    createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 9,
    createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 5,
    createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 4,
    createdOn: new Date('Thu May 7 2020 12:00:41 GMT+0530 (India Standard Time)'),
    attributes: {
      'product-attributes': {
        'print-quality': 6
      },
      // 'logistics': {
      //   'delivery': 5,
      //   'speed': 5
      // },
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
    rating: 3,
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
  },

  {
    description: "Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 10,
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
  }],

  2: [{
    description: "page2 - The order Should have arrived on monday but i still have not received it, not i have received any status of my order",
    rating: 10,
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
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 5,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 7,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 2,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 4,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 9,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 5,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 4,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 3,
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
  },

  {
    description: "page2 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 10,
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
  }],

  3: [{
    description: "page3 - The order Should have arrived on monday but i still have not received it, not i have received any status of my order",
    rating: 10,
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
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 5,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 7,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 2,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 4,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 9,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 5,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 4,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 3,
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
  },

  {
    description: "page3 -Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 10,
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
  }],

  4: [{
    description: "page4 -The order Should have arrived on monday but i still have not received it, not i have received any status of my order",
    rating: 10,
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
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 5,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 7,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 2,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 4,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 9,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 5,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 4,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 3,
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
  },

  {
    description: "page4 - Print Quality was fantastic, delivery was slower than i expected, They keep spamming me with advertisements and offers daily",
    rating: 10,
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
  }],

  meta: {
    totalPages: 4,
    totalCount: 40
  }
}
export default Component.extend({
  currentPage: 1,
  sortBy: 'createdOn',
  feedback: computed('currentPage', 'sortBy', 'searchTerm', 'filterThemes', 'filterTypes', function() {
    let feedback = FEEDBACK[this.currentPage];
    let sortedFeedback = feedback.sortBy(this.sortBy);
    let searchTerm = this.searchTerm || '';
 
    let searchResults = sortedFeedback.filter((item) => {
      return item.description.toLowerCase().includes(searchTerm.toLowerCase());
    })
    let searchedFeedback = searchTerm.length ? searchResults : sortedFeedback;
    let filteredFeedback;

    if(this.filterThemes && this.filterThemes.length || this.filterTypes && this.filterTypes.length) {
      filteredFeedback = searchedFeedback.filter((feedback) => {
        let { attributes } = feedback;
        // let typeFound;
        // let themeFound = this.findMatch(Object.keys(attributes), this.filterThemes);
        // Object.keys(attributes).forEach((attribute) => {
        //   let types = Object.keys(attributes[attribute])
        //   typeFound = this.findMatch(types, this.filterTypes);
        // })

        // return typeFound || themeFound

        let originalThemeArray = Object.keys(attributes)
        let selectedThemeArray = this.filterThemes;

        let originalTypeArray = [];
        Object.keys(attributes).forEach((attribute) => {
          let types = Object.keys(attributes[attribute])
          originalTypeArray.push(...types);
        })

        let selectedTypeArray = this.filterTypes;

        return this.findMatch(originalThemeArray, selectedThemeArray) || this.findMatch(selectedTypeArray, originalTypeArray);

      });
      return filteredFeedback;
    } else {
      return searchedFeedback;
    }
    
  }),
  
  showPrev: computed('currentPage', function() {
    return this.currentPage !== 1;
  }),

  showNext: computed('currentPage', function() {
    return this.currentPage !== FEEDBACK.meta.totalPages;
  }),
  
  actions: {
    search(event) {
      let { value } = event.target;
      set(this, 'searchTerm', value);
    },

    changePage(type) {
      let currentPage = type === 'prev' ? this.currentPage - 1 : this.currentPage + 1;
      set(this, 'currentPage', currentPage);

      if(type === 'prev') {
        if(this.currentPage !== 1) { 
          set(this, 'currentPage', this.currentPage - 1);
        } else {
          set(this, 'hidePrev', true);
        }
      }
    },

    applyFilters(filterObject) {
      set(this, 'filterThemes', filterObject.appliedThemes);
      set(this, 'filterTypes', filterObject.appliedTypes);
    },

    sortFeedback(event) {
      let { value } = event.target;
      switch(value) {
        case 'time': {
          set(this, 'sortBy', 'createdOn')
        } break;

        case 'rating': {
          set(this, 'sortBy', 'rating')
        } break;
      }
    }
  },

  findMatch(array1, array2) {
    return array1.some(element=> array2.includes(element))
  }
});