//imports
import connectDB from '../../database/config/mongodb'
import User from '../../database/models/user'

const handler = async(req, res) => {
    if(req.method === 'DELETE'){
        try{
            await User.deleteOne({_id: req.body.user_id})
            .then(res => {
                if(res.deletedCount) return res.json({error: false}) 
                return res.json({error: true, error_message: 'user not deleted from db'}) 
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)