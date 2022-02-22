//imports
import connectDB from '../../database/config/mongodb'
import Publication from '../../database/models/publication'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const publication = new Publication({
                auteur: req.body.auteur,
                journal: req.body.journal,
                titre: req.body.titre,
                reference: req.body.reference,
                lien: req.body.lien
            })
            await publication.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)