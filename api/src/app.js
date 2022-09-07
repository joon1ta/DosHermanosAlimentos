import express from 'express';
import colors from 'colors';

// Import products routes
import productsRoutes from './routes/products.js';

const app = express()

app.use('/api/v1/products', productsRoutes)

app.listen(3000, () => console.log(colors.rainbow('Server running in 3000 port')))