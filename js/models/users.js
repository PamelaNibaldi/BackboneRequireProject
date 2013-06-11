define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var UserModel = Backbone.Model.extend({

    defaults: {

          user: 'Dario',
          age: 32,
          team: 'Nob'

    },

  });
  return UserModel;
});