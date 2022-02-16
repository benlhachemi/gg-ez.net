//imports
import connectDB from '../../database/config/mongodb'
import Session from '../../database/models/session'

const handler = async(req, res) => {
    if(req.method === 'DELETE'){
        try{
            const session = await Session.findOneAndRemove({session_id: req.body})
            if(session) return res.json({error: false})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)