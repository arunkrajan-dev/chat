
Template.createChat.events({
   'submit form': function(e, t) {
       e.preventDefault();
       var title = t.find("#title").value;
       Chats.insert({
           "title": title
       });
       t.find("#title").value = "";
   }
});

Template.home.helpers({
    "chats": function() {
        return Chats.find({});
    }
});

Template.home.events({
   'click #logout': function(e, t) {
       e.preventDefault();
    //   alert("logout");
       Meteor.logout();
    //   Router.go('home');
   }    
});