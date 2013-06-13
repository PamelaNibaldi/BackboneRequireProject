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
    if (attrs.name.match(/\d/) || attrs.name==='') invalid.push('User name is required, and must contain a valid value.');
    if (attrs.lastName.match(/\d/) || attrs.lastName==='') invalid.push('User last name is required, and must contain a valid value.');
    if (isNaN(attrs.age) || attrs.age<=0 || attrs.age >=100 ) invalid.push('User\'s age is required, and must contain a valid value.');
    if (isNaN(attrs.id) || attrs.id<=0 || attrs.id >=100) invalid.push('User id is not valid');

    if (invalid.length>0) return invalid;
  }
  });
  return UserModel;
});