import { productsService } from "../services/productServices.js"

const productController = {
    getAll: async (req, res) => {
        const allProducts = await productsService.getAll();
        return res.status(200).json({
            status: 200,
            total: allProducts.length,
            data: allProducts
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const product = await productsService.getOne(id)
        return res.status(200).json({
            status: 200,
            data: product
        })
    },
    create: async (req, res) => {
        const newProduct = { ...req.body }
        const productStored = await productsService.create(newProduct)
        return res.status(200).json({
            data: productStored
        })
    },
    update: (req, res) => {
        return res.send(`Actualizar producto con el id ${req.params.id}`)
    },
    delete: (req, res) => {
        return res.send(`Borrar un producto con el id ${req.params.id}`)
    }
}



export default productController;