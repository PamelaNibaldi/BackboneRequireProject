define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'text!../../../templates/users/edit.html'
], function($, _, Backbone, User, UsersCollection, usersEditTemplate){
  var hideMsg = function($messageEl, classToRemove) {
    $messageEl.addClass('notShow');
    $messageEl.removeClass(classToRemove);
  };
  var showMsg = function($messageEl, msg, classToAdd) {
    $messageEl.html(msg);
    $messageEl.addClass(classToAdd);
    $messageEl.removeClass('notShow');
  };
  function countDown(time) {
    var timer = $.Deferred();
    setTimeout(function () {
      timer.resolve();
    }, time);
    return timer.promise();
  }

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
      var $messageEl = $('.updateMsg');
      user.on('invalid', function(model, error) {
        var msg = 'There were errors!!!<br>' + error.reduce(function(el, el2) {
          return el + ' <br>' + el2;
        });
        showMsg($messageEl, msg, 'error');
        var willCountDown = countDown(3000);
        willCountDown.then(hideMsg($messageEl,'error'));
      });
      if(user.set({id: id, name: name, lastName: lastName, age: age}, {validate:true})) {
        localStorage.setItem('users-local-storage-'+id, JSON.stringify(user));
        showMsg($messageEl, 'User was successfully edited!');
        var willCountDown = countDown(3000);
        willCountDown.then(hideMsg($messageEl)).then(function() {//transition to listing page
          document.location.href = '';
        });
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