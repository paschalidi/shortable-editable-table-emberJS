import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  actions: {
    editEntry() {
      this.set('isEditing', true);
    },
    cancelEditEntry() {
      this.set('isEditing', false);
    },
    saveEditChanges() {
      this.set('value', this.get('value'));
      this.set('isEditing', false);
    },
  }

});
