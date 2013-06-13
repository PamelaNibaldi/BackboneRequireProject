define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/users',
//  'collections/projects',
  'models/users',
  'text!templates/users/list.html'
], function($, _, Backbone, UsersCollection, UserModels, projectsListTemplate){

  var UserListView = Backbone.View.extend({
    el: $("#container"),
    render: function(){
      var localStorage = UsersCollection.localStorage.findAll();
     // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( projectsListTemplate, { users: localStorage} );
        this.$el.html(compiledTemplate);
    }
  });

  // Returning instantiated views can be quite useful for having "state"
  return UserListView;
});
