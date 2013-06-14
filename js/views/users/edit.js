define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'text!../../../templates/users/edit.html'
], function($, _, Backbone, User, UsersCollection, usersEditTemplate){
  var messageDisplay = function(msg, classToAdd) {
    var $messageEl = $('.updateMsg');
    $messageEl.html(msg);
    $messageEl.addClass(classToAdd);
    $messageEl.removeClass('notShow');
    setTimeout (function() {
      $messageEl.addClass('notShow');
      $messageEl.removeClass(classToAdd);
    }, 3000);
  };
  var UsersEditView = Backbone.View.extend({
    el: $('#content'),
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
        var msg = 'There were errors!!!<br>' + error.reduce(function(el, el2) {
          return el + ' <br>' + el2;
        });
        messageDisplay(msg, 'error');
      });
      if(user.set({id: id, name: name, lastName: lastName, age: age}, {validate:true})) {
        localStorage.setItem('users-local-storage-'+id, JSON.stringify(user));
        messageDisplay('User was successfully edited!'); //displays notification message
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