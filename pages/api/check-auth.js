//imports
import connectDB from '../../database/config/mongodb'
import Session from '../../database/models/session'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const session = await Session.findOne({session_id: req.body.session_id})
            if(!session) return res.json({error: true, found: false})
            return res.json({error: false, session: session})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)