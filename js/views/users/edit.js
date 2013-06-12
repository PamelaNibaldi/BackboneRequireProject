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
      'click #editBtn': 'editUser'
    },

    saveUser: function () {
      var id = $('#id').val();
      if (!id) return; //not allowed to create a user without id
      var user = new User();
      var name = $('#name').val();
      var lastName = $('#lastName').val();
      var age = $('#age').val();
      user.set({id: id , name: name, lastName: lastName, age: age});
      user.save();
    },

    render: function(id) {
      var compiledTemplate;
      var user;
      if(id) {
          user = new User({id: id});
          user.fetch({
            success: function (user) {
              compiledTemplate = this.template(user.toJSON());
              this.$el.html(compiledTemplate);
            }
          });
      }
    }
  });
  return UsersEditView;
});