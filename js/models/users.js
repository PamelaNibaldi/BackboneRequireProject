define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var UserModel = Backbone.Model.extend({

    defaults: {

          name: '',
          lastName: '',
          age: -1,
          id: -1

    }


  });
  return UserModel;
});