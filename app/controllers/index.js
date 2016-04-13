import Ember from 'ember';

export default Ember.Controller.extend({
  isAlertNeeded: false,
  actions: {
    toggleAlert() {
      this.set('isAlertNeeded', true);
    }
  }
});
