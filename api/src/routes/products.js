import { Router } from 'express'

const productsRoutes = Router()

productsRoutes.get('/', (req, res) => {
    return res.send('Desde el archivo product.js')
})







export default productsRoutes;