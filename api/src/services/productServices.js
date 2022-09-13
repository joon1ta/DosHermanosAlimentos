import Product from "../models/ProductsModel.js";


export const productsService = {
    getAll: (options) => {
        try {
            return Product.find({ ...options })
        } catch (error) {
            return error;
        }
    },
    getOne: (id) => {
        try {
            return Product.find({ _id: id })
        } catch (error) {
            return error;
        }
    },
    create: (newProduct) => {
        try {
            return Product.create(newProduct)
        } catch (error) {
            return error
        }
    }
}