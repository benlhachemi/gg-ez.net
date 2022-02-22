//imports
import connectDB from '../../database/config/mongodb'
import Projet from '../../database/models/projet_recherche'

const handler = async(req, res) => {
    if(req.method === 'GET'){
        try{
            const projets = await Projet.find()
            if(!projets) return res.json({error: false, projets: []})
            return res.json({error: false, projets: projets})
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)