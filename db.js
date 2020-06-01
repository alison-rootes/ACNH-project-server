const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, { //giving us access to all their stuff
    dialect: 'postgres'
}); 

sequelize.authenticate()
.then(() => console.log('Connected to database'))
.catch(err => console.log (err));


module.exports= sequelize;