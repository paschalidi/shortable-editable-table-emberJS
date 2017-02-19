// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('entry');
  },

  actions: {
    deleteEntry(entry) {
      entry.destroyRecord();
    }
  }
});
