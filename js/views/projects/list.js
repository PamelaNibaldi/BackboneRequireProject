define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/users',
  'models/users',
  'text!templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, UserModels, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#container"),
    render: function(){
          console.log( "llega786786" );

        
      var project0 = new UserModels({id: '1', age:"31"}); 
      var project1 = new UserModels({id:'2', age:"40"}); 
      var project2 = new UserModels({id:'3', age:"14"}); 
      var project3 = new UserModels({id:'4', birth:"15/12/1981"});
      var project4 = new UserModels({id:'5',firstname:"victoria"});

          var aProjects = [project0, 
                      project1,
                      project2,
                      project3,
                      project4];


        
          this.collection = new ProjectsCollection(aProjects);
        
         // this.collection.add({ name: "Ginger Kid"});
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
    }
  });

  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});
/*

define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      this.collection = new ProjectsCollection();
      this.collection.add({ name: "Ginger Kid"});
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});
*/