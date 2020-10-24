import Component from '@ember/component';
import { computed, set } from '@ember/object';

const THEME_FILTERS = [
  {
    name: 'logistics',
    count: 10539,
    checked: false,
    
    types: [{
    name: 'delivery',
    count: '7721',
    postive: 70,
    negative: 30,
    checked: false
  },
  {
    name: 'speed',
    count: '7579',
    postive: 45,
    negative: 55,
    checked: false
  },
  {
    name: 'taxes',
    count: '775',
    postive: 10,
    negative: 90,
    checked: false
  },
  {
    name: 'accuracy',
    count: '229',
    postive: 93,
    negative: 7,
    checked: false
  }]
},
{
  name: 'Product delivery',
  count: 10539,
  checked: false,
  
  types: [{
  name: 'print quality',
  count: '7721',
  postive: 70,
  negative: 30,
  checked: false
},
{
  name: 'speed',
  count: '7579',
  postive: 45,
  negative: 55,
  checked: false
},
{
  name: 'taxes',
  count: '775',
  postive: 10,
  negative: 90,
  checked: false
},
{
  name: 'accuracy',
  count: '229',
  postive: 93,
  negative: 7,
  checked: false
}]
}]

export default Component.extend({
  themeFilters: THEME_FILTERS,

  checkedFilters: computed('themeFilters.@each.checked', function() {
    return this.themeFilters;
  }),


  actions: {
    changeThemeValue(themeName) {
      let changedTheme = this.themeFilters.findBy('name', themeName);
      set(changedTheme, 'checked', !changedTheme.checked);
      set(changedTheme, 'types', changedTheme.types.map((type) => {
        set(type, 'checked', changedTheme.checked);
        return type;
      }));
    },

    changeTypeValue(themeName, typeName) {
      let changedTheme = this.themeFilters.findBy('name', themeName);
      let changedType = changedTheme.types.findBy('name', typeName);
  
      set(changedType, 'checked', !changedType.checked)
    },

    applyFilters() {
      let appliedThemes = this.checkedFilters.filterBy('checked', true).map((theme) => theme.name);
      let appliedTypes = [];
      this.checkedFilters.forEach((filter) => {
        filter.types.forEach((type) => {
          if(type.checked) {
            appliedTypes.push(type.name);
          }
        });
      });
      let filterObject = {
        appliedThemes,
        appliedTypes
      }
      this.applyFilters(filterObject);
    }
  }
});