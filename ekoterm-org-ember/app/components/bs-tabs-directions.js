import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  // initTabs: (function() {
  //   return $('.nav-tabs .active').tab('show');
  // }).on('didInsertElement')
  displayModal: false,
  actions: {
    showModal() {
      this.set('displayModal', true);
    }
  },

  initPopover: (function() {
    return $('a.pop').popover();
  }).on('didInsertElement')
});
