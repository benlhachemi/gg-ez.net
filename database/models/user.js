import mongoose from 'mongoose'
var Schema = mongoose.Schema

var user = new Schema({
    nom_complet: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mot_de_passe: {
        type: String,
    },
    role: {
        type: String,
        default: null
    },
    etat: {
        type: Number,
        required: true
    },
    date_inscriprion: {
        type: Date,
        default: Date.now
    },
    google: {
        type: Boolean,
        default: false
    }
});

mongoose.models = {}

var User = mongoose.model('User', user)

export default User