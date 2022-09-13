import { Router } from 'express'


// Controller
import productController from '../controllers/productController.js'

const productsRoutes = Router()


// All products
productsRoutes.get('/', productController.getAll)

// One product
productsRoutes.get('/:id', productController.getOne)

// Create Product
productsRoutes.post('/create', productController.create)

// Update product
productsRoutes.put('/:id', productController.update)

// Delete a product
productsRoutes.delete('/:id', productController.delete)





export default productsRoutes;