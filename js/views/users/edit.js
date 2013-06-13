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
      var id = $('#id').text();
      var name = $('#name').val();
      var lastName = $('#lastName').val();
      var age = $('#age').val();
      var user = new User();
      user.set({id: id, name: name, lastName: lastName, age: age });
      localStorage.setItem('users-local-storage-'+id, JSON.stringify(user));
      document.location.href = '';
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