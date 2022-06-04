const {Branches, restaurantBranches}  = require("../models/model")


module.exports = {
    GET: (_, res) => {
        try{
            res.send('Branches')
        }catch(err){
            res.sendStatus(500)
        }
    },
    POST: async (req, res) => {
        try{
            const {name, restaurantId} = req.body;
            const NewBranches = await Branches.create({name})
            await restaurantBranches.create({branchId: NewBranches.id, restaurantId})
            res.send(NewBranches)
        }catch(err){
            res.sendStatus(500)
        }
    }
}