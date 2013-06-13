define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var UserModel = Backbone.Model.extend({
    defaults: {
      name: '',
      lastName: ''
      // age: -1,
      // id: -1
    },
  validate: function(attrs) {
    var invalid=[];
    if (attrs.name==='') invalid.push('User name is required');
    if (attrs.lastName==='') invalid.push('User last name is required');
    if (attrs.age<=0 || attrs.age >=100 ) invalid.push('User\'s age is not valid');
    if (attrs.id===-1) invalid.push('User id is not valid');

    if (invalid.length>0) return invalid;
  }
  });
  return UserModel;
});