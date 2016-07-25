Template.sendMsg.events({
    'submit form': function(e, t) {
        e.preventDefault();
        var msg = t.find("#msg").value;
        Msgs.insert({
            msg: msg,
            chatId: Router.current().params.chatId
        });
        t.find("#msg").value = "";
    }
});

Template.chat.helpers({
    'msgs': function() {
        return Msgs.find({chatId: Router.current().params.chatId});
    },
    
    'chats': function() {
        return Chats.findOne({_id: Router.current().params.chatId});
    }
});

Template.addUser.events({
   'submit form': function(e, t) {
       e.preventDefault();
       var user = t.find("#user").value;
       Chats.update(
        {
            _id: Router.current().params.chatId  
        },
        {
            $addToSet: {"users": {"name": user}}
        }
       );
       t.find("#user").value = "";
   } 
});