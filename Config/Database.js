const { default: mongoose } = require('mongoose');

const connectToMongo = (db_uri) => {
    mongoose.connect(db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`connection successful.`);
    }).catch((err) => console.log('not connected' + err));
}

module.exports = connectToMongo;