/*
require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone'
  }

});
*/


require.config({

  urlArgs: 'bust=' + (new Date()).getTime(), // Cache busting, for development purposes

  paths: {

/*----------------- Libs --------------------*/

      jquery : 'libs/jquery/jquery',
      underscore : 'libs/underscore/underscore',
      backbone : 'libs/backbone/backbone',
      localStorage: 'libs/backbone/backbone.localStorage',
//      marionette: 'libs/backbone/backbone.marionette',
      marionette: 'libs/marionette/backbone.marionette.min',

/*----------------- Libs --------------------*/

/*----------------- Views --------------------*/

      UserListView : 'views/users/edit',
      TestListView : 'views/users/test',
      ViewsCreateList : 'views/users/create',
      ViewsUserList : 'views/users/list',

/*----------------- Views --------------------*/

/*----------------- Models --------------------*/

      UserModel : 'models/users',

/*----------------- Models --------------------*/

/*----------------- Collections --------------------*/

      UsersCollection : 'collections/users'

/*----------------- Collections --------------------*/

  },

  shim: {
    backbone: {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    localStorage: {
      deps: ['backbone'],
      exports: 'localStorage'
    },
    marionette:{
      deps: ['backbone'],
      exports: 'Marionette'
    }
  },

  priority: [ 'jquery', 'backbone', 'localStorage' ]

});

require([

  // Load our app module and pass it to our definition function
  'app'
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});