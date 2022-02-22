import mongoose from 'mongoose'
var Schema = mongoose.Schema

var sondage = new Schema({
    auteur: {
        type: String,
        required: true
    },
    groupe: {
        type: Array,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    participants: {
        type: Array,
        default: []
    },
    resultats: {
        type: Array,
        default: []
    }
});

mongoose.models = {}

var Sondage = mongoose.model('Sondage', sondage)

export default Sondage