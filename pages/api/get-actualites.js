//imports
import connectDB from '../../database/config/mongodb'
import Actualite from '../../database/models/actualite'

const handler = async(req, res) => {
    if(req.method === 'GET'){
        try{
            const actualites = await Actualite.find()
            if(!actualites) return res.json({error: false, actualites: []})
            return res.json({error: false, actualites: actualites})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)