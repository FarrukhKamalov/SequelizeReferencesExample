const { database } = require("pg/lib/defaults");
const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/restaurant')

const Restaurants =  sequelize.define('restaurants',{
    name: {
        type:  DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 50,
            min:3
        }
    }
})
const Branches = sequelize.define('branches',{
    name: {
        type:  DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 80,
            min:3
        }
    }
})

const restaurantBranches = sequelize.define('Restaurant-branch',{
    restaurantId: {
        type: DataTypes.INTEGER,
        references: {
            model: Restaurants, 
            key: 'id'
        }
    },
    branchId:{
        type: DataTypes.INTEGER,
        references: {
            model: Branches,
            key:'id'
        }
    }
})

Restaurants.belongsToMany(Branches, {through: restaurantBranches});
Branches.belongsToMany(Restaurants, {through: restaurantBranches})

Restaurants.hasOne(Branches)
Branches.belongsTo(Restaurants)




module.exports = {
    Restaurants,
    Branches,
    restaurantBranches,
    sequelize
}