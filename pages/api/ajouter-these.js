//imports
import connectDB from '../../database/config/mongodb'
import These from '../../database/models/these'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const these = new These({
                auteur: req.body.auteur,
                date: req.body.date,
                titre: req.body.titre,
                lien: req.body.lien
            })
            await these.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)