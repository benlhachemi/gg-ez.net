//imports
import connectDB from '../../database/config/mongodb'
import Brevet from '../../database/models/brevet'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const brevet = new Brevet({
                auteur: req.body.auteur,
                date: req.body.date,
                titre: req.body.titre,
                reference: req.body.reference,
                lien: req.body.lien
            })
            await brevet.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)