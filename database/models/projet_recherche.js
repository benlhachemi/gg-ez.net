import mongoose from 'mongoose'
var Schema = mongoose.Schema

var projet = new Schema({
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
    lien: {
        type: String,
        required: true
    },
    date_publication: {
        type: Date,
        default: Date.now
    },
});

mongoose.models = {}

var Projet = mongoose.model('Projet', projet)

export default Projet