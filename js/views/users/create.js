define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'text!templates/users/create.html'
], function($, _, Backbone, User, UsersCollection, usersCreateTemplate){
  var UsersEditView = Backbone.View.extend({
    el: $('#container'),
    template: _.template(usersCreateTemplate),
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
      user.save();
    },

    render: function(id) {
      compiledTemplate = this.template({});
      this.$el.html(compiledTemplate);
    }
  });
  return UsersEditView;
});