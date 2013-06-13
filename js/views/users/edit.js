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
      'click .editBtn': 'editUser'
    },

    editUser: function () {
      var id = $('.editBtn').attr('id');
      var name = $('input[name="firstName"]').val();
      var lastName = $('input[name="lastName"]').val();
      var age = $('input[name="age"]').val();
      var user = new User();
      user.on('invalid', function(model, error) {
        alert('ERROR:\n'+error.reduce(function(el, el2) {
          return el + ' \n' + el2;
        }));
      });
      if(user.set({id: id, name: name, lastName: lastName, age: age}, {validate:true})) {
        localStorage.setItem('users-local-storage-'+id, JSON.stringify(user));
      document.location.href = '';
      }
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