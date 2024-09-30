import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://murcio2490:iy3oZQYTdabeHiWe@prueba2db.ddob1.mongodb.net/?retryWrites=true&w=majority&appName=prueba2db')
        console.log('>>> DB is conected')
    } catch (error) {
        console.log(error)
    }
}