import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr('string'),
  bust: DS.attr('string'),
  waist: DS.attr('string'),
  hip: DS.attr('string'),
  address: DS.attr('string'),
  email: DS.attr('string'),
});
