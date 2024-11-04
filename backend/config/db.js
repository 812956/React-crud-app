const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URI;

module.exports = db;
