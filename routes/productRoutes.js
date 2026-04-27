/*const  express = require("express");
const router = express.Router();
const Product = require("../models/Product");
//Dummy sneaker data (we'll replace later with DB)
/*const products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 9999,
        image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        brand:"Nike"
    },
    {
        id : 2,
        name : "Adidas Ultraboost",
        price: 11999,
        image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
        brand:"Adidas"
    },
    {
        id: 3,
        name: "Puma RS-X",
        price: 8999,
        image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        brand:"Puma"
    }
];
//GET all products
router.get("/",(req,res)=>{res.json(products);});
module.exports = router;
*/
//GET ALL PRODUCTS FROM DB
/*router.get("/",async(req,res)=>{const products = await Product.find();
    res.json(products);
});
module.exports = router;
router.post("/",async(req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
})*/
/*const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// ✅ GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET SINGLE PRODUCT BY ID (IMPORTANT FOR DETAIL PAGE)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ CREATE PRODUCT
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ UPDATE PRODUCT
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;*/
/*const express = require("express");
const router = express.Router();

console.log("NEW ORDER ROUTES FILE RUNNING");

router.get("/",(req,res)=>{
  res.json([{msg:"Orders working"}]);
});
module.exports = router;*/
/*const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// ✅ GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;*/
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// ✅ GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET SINGLE PRODUCT (VERY IMPORTANT)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;