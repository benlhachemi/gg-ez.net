//imports
import connectDB from '../../database/config/mongodb'
import Sondage from '../../database/models/sondage'

const handler = async(req, res) => {
    if(req.method === 'DELETE'){
        try{
            await Sondage.deleteOne({_id: req.body.id}).then(result => {
                if(result.deletedCount) return res.json({error: false})
                return res.json({error: true})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)