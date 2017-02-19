import DS from 'ember-data';

export default DS.Model.extend({
  //todo if you make validation make some of them number instead of string
  firstName:  DS.attr('string'),
  lastName:   DS.attr('string'),
  age:        DS.attr('string'),
  bust:       DS.attr('string'),
  waist:      DS.attr('string'),
  hip:        DS.attr('string'),
  address:    DS.attr('string'),
  email:      DS.attr('string'),
});
