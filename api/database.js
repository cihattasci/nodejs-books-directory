var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cihat:cihat123.@realmcluster.kbrok.mongodb.net/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});