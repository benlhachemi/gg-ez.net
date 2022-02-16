//imports
import connectDB from '../../database/config/mongodb'
import User from '../../database/models/user'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        const user_id = req.body.user_id
        //verifier qui a demandé cette API
        const user = await User.findOne({_id: user_id})
        if(!user) return res.json({error: true})
        if(user.role !== 'admin') return res.json({error: true})

        //chercher les demandes d'inscriptions
        try{
            const demandes = await User.find({etat: 0})
            return res.json({error:false, demandes: demandes})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)