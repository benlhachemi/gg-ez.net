//imports
import connectDB from '../../database/config/mongodb'
import Sondage from '../../database/models/sondage'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const sondage = new Sondage({
                auteur: req.body.auteur,
                groupe: req.body.groupe,
                message: req.body.message,
            })
            await sondage.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)