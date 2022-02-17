import mongoose from 'mongoose'
var Schema = mongoose.Schema

var information = new Schema({
    auteur: {
        type: String,
        required: true
    },
    groupe: {
        type: Array,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

mongoose.models = {}

var Information = mongoose.model('Information', information)

export default Information