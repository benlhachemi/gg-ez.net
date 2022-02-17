//imports
import connectDB from '../../database/config/mongodb'
import Sondage from '../../database/models/sondage'

const handler = async(req, res) => {
    if(req.method === 'PUT'){
        try{
            await Sondage.findOneAndUpdate({_id: req.body.sondage_id}, {
                votes: req.body.votes + 1,
                $push: {resultats: req.body.vote, participants: req.body.user_id}
            })
            .then(result => {
                if(result.updateCount) return res.json({error: false}) 
                return res.json({error: true, error_message: 'erreur. veuillez ressayer'}) 
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)