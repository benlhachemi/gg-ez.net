//imports
import connectDB from '../../database/config/mongodb'
import Information from '../../database/models/information'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        const user_role = req.body.role
        try{
            if(user_role == 'admin'){
                await Information.find().then(result => {
                    if(result) return res.json({error: false, informations: result})
                    return res.json({error: false, informations: []})
                })
                return 0
            }
            const informations = await Information.find({groupe: user_role})
            if(!informations) return res.json({error: false, informations: []})
            return res.json({error: false, informations: informations})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)