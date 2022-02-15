//imports
import connectDB from '../../database/config/mongodb'
import User from '../../database/models/user'
import Session from '../../database/models/session'
import { v4 as uuidv4 } from 'uuid'

const handler = async(req, res) => {
    if(req.method === 'POST'){
        const user_data = req.body
        try{
            const user = await User.findOne({email: user_data.email})
            if(!user) return res.json({error: true, error_message: 'Addresse email introuvable'})
            if(user.etat === 0) return res.json({error: true, error_message: 'Votre demande d\'inscription n\'a pas encore été vérifié par un administrateur.'})
            if(!user_data.google && user.google) return res.json({error: true, error_message: 'Votre compte est lié a Google. Veuillez vous connecter avec votre compte Google'})
            if(user_data.google && user.google){
                const session_id = uuidv4()
                try{
                    const session = await new Session({
                        email: user.email,
                        nom_complet: user.nom_complet,
                        role: user.role,
                        etat: user.etat,
                        google: true,
                        session_id: session_id
                    })
                    await session.save().then(result => {
                        if(result) return res.json({error: false, session_id: session_id})
                    })
                }catch(err){return res.json({error: true, error_message: err.message})}
                return 0
            }
            if(user.mot_de_passe !== user_data.mot_de_passe) return res.json({error: true, error_message: 'Mot de passe incorrecte'})
            if(user.mot_de_passe === user_data.mot_de_passe){
                const session_id = uuidv4()
                try{
                    const session = await new Session({
                        email: user.email,
                        nom_complet: user.nom_complet,
                        role: user.role,
                        etat: user.etat,
                        google: false,
                        session_id: session_id
                    })
                    await session.save().then(result => {
                        if(result) return res.json({error: false, session_id: session_id})
                    })
                }catch(err){return res.json({error: true, error_message: err.message})}
            }
        }catch(err){
            return res.json({error: true, error_message: err.message})
        }
    }
}

export default connectDB(handler)