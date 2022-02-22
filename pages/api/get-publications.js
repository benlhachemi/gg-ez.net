//imports
import connectDB from '../../database/config/mongodb'
import Publication from '../../database/models/publication'

const handler = async(req, res) => {
    if(req.method === 'GET'){
        try{
            const publications = await Publication.find()
            if(!publications) return res.json({error: false, publications: []})
            return res.json({error: false, publications: publications})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)