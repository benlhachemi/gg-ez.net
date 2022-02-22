import mongoose from 'mongoose'
var Schema = mongoose.Schema

var actualite = new Schema({
    titre: {
        type: String,
        required: true
    },
    lien: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    date_publication: {
        type: Date,
        default: Date.now
    },
});

mongoose.models = {}

var Actualite = mongoose.model('Actualite', actualite)

export default Actualite