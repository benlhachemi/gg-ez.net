//imports
import connectDB from '../../database/config/mongodb'
import Information from '../../database/models/information'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const information = new Information({
                auteur: req.body.auteur,
                groupe: req.body.groupe,
                titre: req.body.titre,
                description: req.body.description
            })
            await information.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)