define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/users',
  'text!templates/users/list.html'
], function($, _, Backbone, UserCollection, userListTemplate){
  var UserListView = Backbone.View.extend({

    el: $("#container"),
    render: function(){
      this.collection = new UserCollection();
//      this.collection.add({ user: "Ginger Kid"});
      var variables = { user: "Juan" };
      // Compile the template using Underscores micro-templating
//      var compiledTemplate = _.template( userListTemplate, { projects: this.collection.models } );
      var compiledTemplate = _.template( userListTemplate, variables);
      this.$el.html(compiledTemplate);
    }

  });

  // Returning instantiated views can be quite useful for having "state"
  return UserListView;
});