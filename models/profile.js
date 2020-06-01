module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('profile',{
        userName: req.body.userName,
        createDate: req.body.createdAt,
    })
}