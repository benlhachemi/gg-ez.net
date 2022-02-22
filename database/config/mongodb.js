import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        console.log('DB already connected')
        return handler(req, res)
    }
    // Use new db connection
    await mongoose.connect('mongodb+srv://doadmin:dO9i8UH3s6K274T0@benlhachemi-mongodb-4ad45ad6.mongo.ondigitalocean.com/admin?authSource=admin&tls=true&tlsCAFile=./database/certificate.crt', {
        useNewUrlParser: true
    })
    console.log('Connecting to DB...')
    return handler(req, res)
}

export default connectDB
