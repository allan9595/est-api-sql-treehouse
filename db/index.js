"use strict";
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'fsjstd-restapi.db'
});

const db = {
    sequelize,
    Sequelize,
    models:{
        
    }
}

db.models.Course = require('./models/course.js')(sequelize);
db.models.User = require('./models/user.js')(sequelize);

module.exports = db;