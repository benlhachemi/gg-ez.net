//imports
import connectDB from '../../database/config/mongodb'
import These from '../../database/models/these'

const handler = async(req, res) => {
    if(req.method === 'GET'){
        try{
            const theses = await These.find()
            if(!theses) return res.json({error: false, theses: []})
            return res.json({error: false, theses: theses})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)