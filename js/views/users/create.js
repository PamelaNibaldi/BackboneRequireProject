define([
  'jquery',
  'underscore',
  'backbone',
  'models/users',
  'collections/users',
  'text!../../../templates/users/edit.html'
], function($, _, Backbone, User, UsersCollection, usersCreateTemplate){
  var messageDisplay = function(msg, classToAdd) {
    var $messageEl = $('.updateMsg');
    $messageEl.html(msg);
    if(classToAdd)
      $messageEl.toggleClass(classToAdd); //add
    $messageEl.toggleClass('notShow'); //remove
    setTimeout(function() {
        $messageEl.toggleClass('notShow'); //add
        if(classToAdd)
          $messageEl.toggleClass(classToAdd);//remove
    }, 3000);
  };

  var UsersCreateView = Backbone.View.extend({

    el: $('#content'),

    template: _.template(usersCreateTemplate),

    events: {
      'click .createBtn': 'saveUser'
    },

    saveUser: function () {
      var user = new User();
      var $name = $('input[name="firstName"]');
      var $lastName = $('input[name="lastName"]');
      var $age = $('input[name="age"]');
      var localStorage = UsersCollection.localStorage.findAll();
      var total = localStorage.length;
      var id = total + 1;

      /*user.on('invalid', function(model, error) {
        var msg = 'There were errors!!!<br>' + error.reduce(function(el, el2) {
          return el + ' <br>' + el2;
        });
        messageDisplay(msg, 'error');
      });*/

      var data = {
        id: id,
        name: $name.val(),
        lastName: $lastName.val(),
        age: $age.val()
      };



      var errors = user.validate(data);
      
      if (errors.length == 0) 
      { 
          user.create(data);
          console.log(user.save());
          if (user.save())
          { //if user was inserted
            $name.val('');
            $lastName.val('');
            $age.val('');
            messageDisplay('User was successfully added into the database!'); //displays notification message
            }
         }
         else { var msg = 'There were errors!!!<br>';
                               for(i=0;i<errors.length;i++){
                                   msg = msg + errors[i] + "<br>";
                                 }
                                showMsg($messageEl, msg, 'error');
                                countDown(3000, $messageEl, 'error');
                               }
                          

      /*user.set({id: id , name: $name.val(), lastName: $lastName.val(), age: $age.val()});
      UsersCollection.add(user);*/

      
    },

    render: function(id) {
      compiledTemplate = this.template({});
      this.$el.html(compiledTemplate);
    }

  });
  return UsersCreateView;
});