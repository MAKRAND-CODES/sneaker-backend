/*console.log(" NEW ORDER ROUTES FILE RUNNING");
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// GET ORDERS
router.get("/", async (req,res)=>{
    try{
        const orders = await
        Order.find().lean();
        return res.json(orders);
    } catch (err){
        console.error("ERROR:", err);
        return res.status(500).json({ error: err.message });
    }
});

// POST ORDER
router.post("/", async (req, res) => {
  try {
    const { items, total } = req.body;

    const order = await Order.create({ items, total });

    res.json(order); // ✅ correct
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;*/
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ GET ORDERS
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().lean();
    return res.json(orders);
  } catch (err) {
    console.error("GET ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

// ✅ PLACE ORDER
router.post("/", async (req, res) => {
  try {
    const { items, total } = req.body;

    const order = await Order.create({ items, total });

    return res.json(order);
  } catch (err) {
    console.error("POST ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;