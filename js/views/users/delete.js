
define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'router',
  'text!../../../templates/users/delete.html'
//  'text!templates/users/delete.html'
], function($, _, Backbone, User, UsersCollection, Router, usersDeleteTemplate){
  var UsersDeleteView = Backbone.View.extend({
    el: $('#container'),
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


/*
define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'text!templates/users/delete.html'
], function($, _, Backbone, User, UsersCollection, usersEditTemplate){
  var UsersDeleteView = Backbone.View.extend({
    el: $('#container'),
//    template: _.template( $( '#deleteTemplate').html() ),
    template: _.template(usersEditTemplate),
    events: {
      'click #editBtn': 'editUser'
    },
    deleteUser: function () {

      var id = $('#id').val();
      window.localStorage.removeItem( "users-local-storage-2" );

    },

    render: function(id) {
      var compiledTemplate;
      if(id) {
        var userData = localStorage.getItem('users-local-storage-'+id);
        console.log(JSON.parse(userData));
        var variables = userData;
        compiledTemplate = this.template(JSON.parse(userData), JSON.parse(userData));
//        console.log( compiledTemplate );
//        this.$el.html( this.template( JSON.parse(userData) ) );
        this.$el.html(compiledTemplate);
      }
    }
  });
  return UsersDeleteView;
});
*/