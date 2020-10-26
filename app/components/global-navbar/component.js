import Ember from 'ember';
import { inject as service } from '@ember/service';
import{ computed } from '@ember/object';

const TABS = [{
    name: 'Pulse',
    route: 'pulse',
    beta: false,
    icon: 'pulse',
},
{
    name: 'Feedback',
    route: 'feedback',
    beta: false,
    icon: 'feedback'
},
{
    name: 'Metrics',
    route: 'metrics',
    beta: true,
    icon: 'metrics'
},
{
    name: 'Impact',
    route: 'impact',
    beta: true,
    icon: 'impact'
}]

export default Ember.Component.extend({
    router: service(),
    tabs: TABS,
    
    activeTab: computed('router', function() {
       return this.router.currentRouteName;
    })
})