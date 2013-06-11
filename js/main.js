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
			localStorage: 'libs/underscore/backbone.localStorage',

/*----------------- Libs --------------------*/

/*----------------- Views --------------------*/

			UserListView : 'views/users/edit',
			TestListView : 'views/users/test',
			ViewsProjectList : 'views/projects/list',
			ViewsUserList : 'views/users/list',

/*----------------- Views --------------------*/

/*----------------- Models --------------------*/

			UserModel : 'models/users',
			ProjectsModel : 'models/projects',
			TestModel : 'models/test',

/*----------------- Models --------------------*/

/*----------------- Collections --------------------*/

//			UserModel : 'models/users',
			ProjectsCollection : 'collections/project',
//			TestModel : 'models/test'

/*----------------- Collections --------------------*/

	},

	shim: {
		backbone: {
			deps: [ 'underscore', 'jquery' ],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		}
	},

	priority: [ 'jquery', 'backbone' ]

})

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});

/*
require([

	'app', function( App ){

		App.initialize();

	}

])*/