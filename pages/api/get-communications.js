//imports
import connectDB from '../../database/config/mongodb'
import Communication from '../../database/models/communication'

const handler = async(req, res) => {
    if(req.method === 'GET'){
        try{
            const communications = await Communication.find()
            if(!communications) return res.json({error: false, communications: []})
            return res.json({error: false, communications: communications})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)