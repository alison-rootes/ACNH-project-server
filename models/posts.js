module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discription: DataTypes.STRING,
        user: {
            type: DataTypes.STRING,
            allowNull: false,  
        }
    });
} ;