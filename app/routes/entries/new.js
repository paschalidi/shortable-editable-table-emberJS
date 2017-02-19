// app/routes/entries/new.js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('entry');
  },
  actions: {
    saveEntry(newEntry) {
      newEntry.save().then(() => this.transitionTo('entries'));
    },
    willTransition() {
      let model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
