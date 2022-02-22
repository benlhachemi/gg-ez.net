//imports
import connectDB from '../../database/config/mongodb'
import Brevet from '../../database/models/brevet'

const handler = async(req, res) => {
    if(req.method === 'GET'){
        try{
            const brevets = await Brevet.find()
            if(!brevets) return res.json({error: false, brevets: []})
            return res.json({error: false, brevets: brevets})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)