const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize")

const Film = sequelize.define("Netflix",{
    name: {
        type: DataTypes.STRING,
        allowNull : false
    },
    actor: {
        type : DataTypes.STRING,
        allowNull:false
    }
    // ,
    // actorTwo: {
    //     type : DataTypes.STRING,
    //     allowNull:true
    // },
    // rating: {
    //     type : DataTypes.INTEGER,
    //     allowNull:true
    // }
})

module.exports = Film;