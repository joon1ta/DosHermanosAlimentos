import Product from "../models/ProductsModel.js";


export const productsService = {
    getAll: () => {
        try {
            return Product.find({ isDeleted: true })
        } catch (error) {
            return error;
        }
    },
    getOne: (id) => {
        try {
            return Product.findOne({ _id: id })
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
    },
    delete: (id) => {
        try {
            return Product.deleteOne({ id })
        } catch (error) {

        }
    },
    update: (id, newProductData) => {
        try {
            return Product.findByIdAndUpdate(
                { _id: id },
                { $set: { newProductData } },
                { new: true }
            )
        } catch (error) {

        }
    }
}