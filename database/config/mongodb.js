import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        console.log('DB already connected')
        return handler(req, res)
    }
    // Use new db connection
    await mongoose.connect(process.env.mongodburl, {
        useNewUrlParser: true
    })
    console.log('Connecting to DB...')
    return handler(req, res)
}

export default connectDB