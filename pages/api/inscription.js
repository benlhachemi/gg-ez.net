//imports
import connectDB from '../../database/config/mongodb'
import User from '../../database/models/user'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        const user_data = req.body

        //checking if email is unique
        const unique = await User.findOne({email: user_data.email})
        if(unique) return res.json({error: true, error_message: 'Adresse email déja utilisé'})

        try{
            const user = await new User({
                nom_complet: user_data.nom_complet,
                email: user_data.email,
                google: user_data.google ? true: false,
                mot_de_passe: user_data.mot_de_passe ? user_data.mot_de_passe : null,
                etat: 0,
                date_inscription: new Date()
            })
            await user.save().then(result => {
                if(result) return res.json({error: false, user: result})
                return res.json({error: true, error_message: 'User not created (problem in DB)'})
            })
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)