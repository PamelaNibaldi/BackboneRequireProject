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
      var user = new User();
      var $name = $('#name');
      var $lastName = $('#lastName');
      var $age = $('#age');
      var localStorage = UsersCollection.localStorage.findAll();
      var total = localStorage.length;
      var id = total + 1;
      user.set({id: id , name: $name.val(), lastName: $lastName.val(), age: $age.val()});
      UsersCollection.add(user);
      user.save();
      $name.val('');
      $lastName.val('');
      $age.val('');
    },

    render: function(id) {
      compiledTemplate = this.template({});
      this.$el.html(compiledTemplate);
    }
  });
  return UsersEditView;
});