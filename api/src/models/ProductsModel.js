import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    types: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

}, { collection: 'products' })

const Product = model('product', productSchema)
export default Product;