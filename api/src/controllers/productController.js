import { productsService } from "../services/productServices.js"

const productController = {
    getAll: async (req, res) => {
        try {
            const allProducts = await productsService.getAll();
            if (allProducts === null) {
                return res.status(404).json({
                    status: 404,
                    message: "Producto no encontrado"
                })
            }
            return res.status(200).json({
                status: 200,
                total: allProducts.length,
                data: allProducts
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "El servidor esta momentaneamente fuera de servicio"
            })
        }


    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params
            if (id) {
                const product = await productsService.getOne(id)
                if (product === null) {
                    return res.status(404).json({
                        status: 404,
                        message: "Producto no encontrado"
                    })
                }
                return res.status(200).json({
                    status: 200,
                    data: product
                })
            }
        } catch (error) {
            return error
        }

    },
    create: async (req, res) => {
        const newProduct = { ...req.body }
        const productStored = await productsService.create(newProduct)
        return res.status(200).json({
            data: productStored
        })
    },
    update: async (req, res) => {
        const { id } = req.params
        const oldProduct = await productsService.getOne(id)
        if (!oldProduct) {
            return res.status(404).json({
                status: 404,
                message: "El Producto seleccionado no existe"
            })
        }
        const updatedProduct = {
            name: req.body.name ?? oldProduct.name
        }
        const response = await productsService.update(id, updatedProduct)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await productsService.delete(id)
        return res.status(200).json({
            status: 200,
            isDeleted: true,
            data: response
        })

    }
}



export default productController;