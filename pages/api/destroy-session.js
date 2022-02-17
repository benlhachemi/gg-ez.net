//imports
import connectDB from '../../database/config/mongodb'
import Session from '../../database/models/session'

const handler = async(req, res) => {
    if(req.method === 'DELETE'){
        try{
            await Session.deleteOne({session_id: req.body})
            .then(result => {
                if(result.deletedCount) return res.json({error: false}) 
                return res.json({error: true, error_message: 'session id not destroyed from db'}) 
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)