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

  saveUser: function (ev) {
    //var userDetails = $(ev.currentTarget).serializeObject();
    //console.log(userDetails);
    var user = new User();
    user.name = $('#name').val();
    user.id = $('#id').val();
    //if (!$('.edit-user-form firstName').val()) return;
    console.log('user: '+user);
    //this.model.save({name: $('.edit-user-form id').val()});
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