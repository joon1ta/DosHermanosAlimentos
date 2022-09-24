import express from 'express';
import colors from 'colors';
import mongoose from 'mongoose'
// Import products routes
import productsRoutes from './routes/products.js';

// DB Connection
try {
    mongoose.connect(
        "mongodb+srv://joon1ta:Jon1ta1234@doshermanos.u1qxdec.mongodb.net/DosHermanos",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(console.log('DB Connection ok!'))
} catch (error) {
    console.log(error)
}


const app = express()
app.use(express.json());


app.use('/api/v1/products', productsRoutes)

app.listen(3000, () => console.log(colors.rainbow('Server running in 3000 port')))