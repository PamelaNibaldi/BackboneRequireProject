define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'text!templates/users/edit.html'
], function($, _, Backbone, User, UsersCollection, usersEditTemplate){
  var UsersEditView = Backbone.View.extend({
    el: $('#container'),
    template: _.template(usersEditTemplate),
    events: {
      'click #createBtn': 'saveUser'
    },

  saveUser: function () {
    var id = $('#id').val();
    if (!id) return; //not allowed to create a user without id
    var user = new User();
    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var age = $('#age').val();
    user.set({id: id , name: name, lastName: lastName, age: age});
    UsersCollection.add(user);
  },

    render: function() {
      // var that = this;
      // that.user = new User({id: options.id});
      var variables = { name: 'Juan' };
      var compiledTemplate = _.template( usersEditTemplate,{});
      this.$el.html(compiledTemplate);
    }
  });
  return UsersEditView;
});