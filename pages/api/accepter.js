//imports
import connectDB from '../../database/config/mongodb'
import User from '../../database/models/user'

const handler = async(req, res) => {
    if(req.method === 'PUT'){
        try{
            await User.findOneAndUpdate({_id: req.body.user_id}, {role: req.body.role, etat: 1})
            .then(res => {
                if(res.updateCount) return res.json({error: false}) 
                return res.json({error: true, error_message: 'user not deleted from db'}) 
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)