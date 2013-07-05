define([
  'underscore',
  'backbone',
  'collections/users',
], function(_, Backbone, UsersCollection) {
  var UserModel = Backbone.Model.extend({
    defaults: {
      name: '',
      lastName: '',
      //age: -1,
      id: 0
    },
  
  validate: function(attrs) {
    
    var invalid=[];
    if (attrs.name.match(/\d/) || attrs.name==='') invalid.push('User name is required, and must contain a valid value.');
    if (attrs.lastName.match(/\d/) || attrs.lastName==='') invalid.push('User last name is required, and must contain a valid value.');
    if (isNaN(attrs.age) || attrs.age<=0 || attrs.age >=100 ) invalid.push('User\'s age is required, and must contain a valid value.');
    if (isNaN(attrs.id) || attrs.id<=0 || attrs.id >=100) invalid.push('User id is not valid');

    return invalid;
                  
  },

  create: function(attrs){
      
    this._setAttributes(attrs);

    UsersCollection.add(this);

  },

  edit: function (attrs) {
    
    this._setAttributes(attrs);

    localStorage.setItem('users-local-storage-'+attrs.id, JSON.stringify(this));
  },

  _setAttributes: function(attrs){

    this.set({id: attrs.id, name: attrs.name, lastName:attrs.lastName, age: attrs.age });
  
   
  
  }

 });
  return UserModel;
});