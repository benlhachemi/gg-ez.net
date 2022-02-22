//imports
import connectDB from '../../database/config/mongodb'
import Projet from '../../database/models/projet_recherche'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const projet = new Projet({
                auteur: req.body.auteur,
                date: req.body.date,
                titre: req.body.titre,
                reference: req.body.reference,
                lien: req.body.lien
            })
            await projet.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)