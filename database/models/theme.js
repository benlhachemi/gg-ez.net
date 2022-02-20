import mongoose from 'mongoose'
var Schema = mongoose.Schema

var theme = new Schema({
    nom_complet: {
        type: String,
        required: true
    },
    date_inscription: {
        type: Date,
        default: Date.now
    },
});

mongoose.models = {}

var Theme = mongoose.model('Theme', theme)

export default Theme