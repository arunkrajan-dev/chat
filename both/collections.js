//Collection to hold chatId, members and private/public indicator
Chats = new Mongo.Collection("chats");



//Each msg should have an associated chatId and user
Msgs = new Mongo.Collection("Msgs");