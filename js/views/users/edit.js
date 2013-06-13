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
    editUser: function () {
      var $id = $('#id');
      var $name = $('#name');
      var $lastName = $('#lastName');
      var $age = $('#age');
      var user = new User();
      user.set({id: id.text(), name: name.val(), lastName: lastName.val(), age: age.val() });
      localStorage.setItem('users-local-storage-'+id, JSON.stringify(user));
    },

    render: function(id) {
      var compiledTemplate;
      if(id) {
        var userData = localStorage.getItem('users-local-storage-'+id);
        compiledTemplate = this.template(JSON.parse(userData));
        this.$el.html(compiledTemplate);
      }
    }
  });
  return UsersEditView;
});