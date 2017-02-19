import DS from 'ember-data';

export default DS.Model.extend({
  firstName:  DS.attr('string'),
  lastName:   DS.attr('string'),
  age:        DS.attr('number'),
  bust:       DS.attr('number'),
  waist:      DS.attr('number'),
  hip:        DS.attr('number'),
  address:    DS.attr('string'),
  email:      DS.attr('string'),
});
