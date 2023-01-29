
import Produk from "../Models/produk.model.js";


export const getProduk = async (req, res) => {
	try {
		const Respon = await Produk.find();
		res.json(Respon);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
export const getProdukById = async (req, res) => {
	try {
		const Respon = await Produk.findById(req.params.id);
		res.json(Respon);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const saveProduk = async (req, res) => {

    const produkbaru = new Produk(req.body);
    try {
        const Respon = await produkbaru.save(Produk);
            res.status(201).json(produkbaru);
        }  catch (error) {
        res.status(400).json({message:error.message}) 
    }
   
};
export const updateProduk = async (req, res) => {
  const id=req.params.id;
    try {
        const Responp = await Produk.updateOne({_id:id}, {$set: req.body});
            res.status(201).json(Responp);
        }  catch (error) {
        res.status(400).json({message:error.message}) 
    }
   
};
export const deleteProduk = async (req, res) => {
    const cekId= await Produk.findById (req.params.id);
    if (!cekId) return res.status(404).json("Data tidak ditemukan");
      try {
          const Responp = await Produk.deleteOne({_id:req.params.id}, {$set: req.body});
              res.status(201).json(Responp);
          }  catch (error) {
          res.status(400).json({message:error.message}) 
      }
     
  };


