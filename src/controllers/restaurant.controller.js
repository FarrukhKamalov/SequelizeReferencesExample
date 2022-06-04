const {Restaurants, Branches, restaurantBranches}  = require("../models/model")



module.exports = {
    GET: async(_, res) => {
        try{
            const restaurants = await Restaurants.findAll({
                include: Branches
            })
            res.send(restaurants)
        }catch(err){
            res.sendStatus(500)
        }
    },
    POST: async (req, res) => {
        try{
            const {name, branchId} = req.body;
            const NewRestaurant = await Restaurants.create({name}); 
            
            res.send({NewRestaurant})
        }catch(err){
            res.sendStatus(500)
        }
    }
}