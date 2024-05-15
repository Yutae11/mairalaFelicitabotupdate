const { Database } = require('quickmongo');

const db = new Database('mongodb+srv://az782l:u9tivl@cluster0.mmfongd.mongodb.net/?retryWrites=true&w=majority');
db.connect().then(() => console.log('[ MONGO DB ] Connected to Mongo Database!'));

module.exports = db;
