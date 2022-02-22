//imports
import connectDB from '../../database/config/mongodb'
import Actualite from '../../database/models/actualite'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const actualite = new Actualite({
                titre: req.body.titre,
                description: req.body.description,
                lien: req.body.lien ? req.body.lien : null
            })
            await actualite.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)