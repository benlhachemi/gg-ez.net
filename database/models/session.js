import mongoose from 'mongoose'
var Schema = mongoose.Schema

var user = new Schema({
    email: {
        type: String,
        required: true
    },
    nom_complet: {
        type: String,
        required: true
    },
    session_id: {
        type: String,
        required: true
    },
    google: {
        type: Boolean,
        required: true
    },
    role: {
        type: String,
        default: null
    },
    etat: {
        type: Number,
        required: true
    }
});

mongoose.models = {}

var Session = mongoose.model('Session', user)

export default Session