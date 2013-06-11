define([
  'jquery',
  'underscore',
  'backbone',
  'collections/users',
  'text!templates/users/edit.html'
], function($, _, Backbone, UsersCollection, usersEditTemplate){
  var UsersEditView = Backbone.View.extend({
    tagName:  '#content',
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

    render: function(options) {
      // var that = this;
      // that.user = new User({id: options.id});
      console.log('render');
      this.$el.html(this.template({}));
    }
  });
  return UsersEditView;
});