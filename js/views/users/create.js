define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'text!templates/users/edit.html'
], function($, _, Backbone, User, usersEditTemplate){
  var UsersEditView = Backbone.View.extend({
    el: $('#container'),
    template: _.template(usersEditTemplate),
    events: {
      'submit .edit-user-form': 'saveUser'
    },

  saveUser: function (ev) {
    //var userDetails = $(ev.currentTarget).serializeObject();
    var user = new User();
    if (!$('.edit-user-form firstName').val()) return;
    console.log($('.edit-user-form firstName').val());
    UsersCollection.create({name: $('.edit-user-form firstName').val()});
  },

    render: function() {
      // var that = this;
      // that.user = new User({id: options.id});
      console.log('render');
      var variables = { name: 'Juan' };
      var compiledTemplate = _.template( usersEditTemplate,{});
      this.$el.html(compiledTemplate);
    }
  });
  return UsersEditView;
});