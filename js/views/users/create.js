define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'text!../../../templates/users/create.html'
], function($, _, Backbone, User, UsersCollection, usersCreateTemplate){
  var UsersEditView = Backbone.View.extend({

    el: $('#container'),

    template: _.template(usersCreateTemplate),

    events: {
      'click .createBtn': 'saveUser'
    },

    saveUser: function () {
      var user = new User();
      var $name = $('input[name="firstName"]');
      var $lastName = $('input[name="lastName"]');
      var $age = $('input[name="age"]');
      var localStorage = UsersCollection.localStorage.findAll();
      var total = localStorage.length;
      var id = total + 1;

      user.on('invalid', function(model, error) {
        alert('ERROR:\n'+error.reduce(function(el, el2) {
          return el + ' \n' + el2;
        }));
      });

      user.set({id: id , name: $name.val(), lastName: $lastName.val(), age: $age.val()});
      UsersCollection.add(user);
      if (user.save()) { //if user was inserted
        $name.val('');
        $lastName.val('');
        $age.val('');
        $('.updateMsg').html('User was successfully inserted to database!');
        setTimeout(function() {
          $('.updateMsg').fadeOut('slow');
        }, 2000);
      }
    },

    render: function(id) {
      compiledTemplate = this.template({});
      this.$el.html(compiledTemplate);
    }

  });
  return UsersEditView;
});