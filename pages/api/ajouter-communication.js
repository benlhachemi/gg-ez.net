//imports
import connectDB from '../../database/config/mongodb'
import Communication from '../../database/models/communication'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
            const communication = new Communication({
                auteur: req.body.auteur,
                lieu: req.body.lieu,
                titre: req.body.titre,
                reference: req.body.reference,
                lien: req.body.lien,
                date: req.body.date
            })
            await communication.save().then(result => {
                if(result) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)