//imports
import connectDB from '../../database/config/mongodb'
import Sondage from '../../database/models/sondage'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        const user_role = req.body.role
        try{
            if(user_role == 'admin'){
                await Sondage.find().then(result => {
                    if(result) return res.json({error: false, sondage: result})
                    return res.json({error: false, sondage: []})
                })
                return 0
            }
            const sondage = await Sondage.find({groupe: user_role})
            if(!sondage) return res.json({error: false, sondage: []})
            return res.json({error: false, sondage: sondage})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)