import Ember from 'ember';

export default Ember.Component.extend({
  sortedEntries: Ember.computed.sort('theEntries', 'sortDefinition'),
  sortBy: 'age',
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function () {
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [`${this.get('sortBy')}:${sortOrder}`];
  }),
});
