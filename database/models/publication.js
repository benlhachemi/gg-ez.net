import mongoose from 'mongoose'
var Schema = mongoose.Schema

var publication = new Schema({
    auteur: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    journal: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    date_publication: {
        type: Date,
        default: Date.now
    },
});

mongoose.models = {}

var Publication = mongoose.model('Publication', publication)

export default Publication