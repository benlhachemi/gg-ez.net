import mongoose from 'mongoose'
var Schema = mongoose.Schema

var these = new Schema({
    auteur: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    date: {
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

var These = mongoose.model('These', these)

export default These