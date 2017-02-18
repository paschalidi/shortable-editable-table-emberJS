import Ember from 'ember';

export default Ember.Controller.extend({
  headerMessage: 'this is a header message',
  firstName: null,
  lastName: null,
  emailAddress: null,

  isValid: Ember.computed('firstName', 'lastName', 'emailAddress',
    function () {
      let mailRegex = /^.+@.+\..+$/;
      return (
        this.get('firstName') &&
        this.get('lastName') &&
        mailRegex.test(this.get('emailAddress'))
      )
    }),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveNewEntry() {
      const email = this.get('emailAddress');
      const firstName = this.get('firstName');
      const lastName = this.get('lastName');

      const newEntry = this.store.createRecord('new-table-entry',
        { email, firstName, lastName }
      );

      newEntry.save().then(() => {
        this.set('responseMessage', `You just added a new entry in the table!`);
        this.set('emailAddress', null);
        this.set('firstName', null);
        this.set('lastName', null);
      });
    },

  }
});
