import mongoose from "mongoose";
const {Schema} = mongoose;
// import dbproduk from "../Config/produkdb.js";

// const Produk = new mongoose.Schema({
const Produk = new Schema({
    name:{
        type: String,
        required:true
    },
    deskripsi:{
        type: String,
        required:true
    },
    stok:{
        type:Number,
        required:true
    },
    harga:{
        type:Number,
        required:true 
}
});

export default mongoose.model('produks', Produk);
