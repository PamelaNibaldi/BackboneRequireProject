
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'models/users',
  'collections/users',
  'router',
  'text!../../../templates/users/delete.html'
//  'text!templates/users/delete.html'
], function($, _, Backbone, Marionette, User, UsersCollection, Router, usersDeleteTemplate){

  var UserDeleteView = Backbone.Marionette.ItemView.extend({
    template: "#user_delete_template",
//    tagName: 'tr',
    className: 'items'
  });

  var UsersDeleteView = Backbone.View.extend({
    el: $('#content'),
    template: _.template(usersDeleteTemplate),
//    template: _.template( $( '#deleteTemplate').html() ),
    events: {
      'click .deleteBtn': 'deleteUser'
    },

    deleteUser: function () {

      var confirm = window.confirm( "Do you want to delete ?." );

      if (confirm) {

        var id = $('.deleteBtn').attr( 'id' );
        window.localStorage.removeItem( "users-local-storage-" + id );

      };

      document.location.href = '';
      return;

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
  return UsersDeleteView;

});
