//const express  = require("express");
//const cors =  require("cors");
//app.use(cors());
//const mongoose = require("mongoose");//must be here
//const authRoutes = require("./routes/authRoutes");
//const express  = require("express");
//const app = express();
//const authRoutes = require("./routes/authRoutes");
//app.use("/api/auth",authRoutes);
//const authRoutes = require("./routes/authRoutes");
//Correct CORS usage
//app.use(cors());
//Middleware
//app.use(express.json());
/*const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//FIRST : CORS
app.use(cors());

//SECOND: JSON PARSER
app.use(express.json());

//THEN ROUTES
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products",productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

mongoose.connect("mongodb://admin:admin123@ac-j473qhz-shard-00-00.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-01.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-02.xfi8fdd.mongodb.net:27017/?ssl=true&replicaSet=atlas-nylq9b-shard-0&authSource=admin&appName=Cluster0")
.then(()=> console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

//const productRoutes = require("./routes/productRoutes");
//Test route
app.get("/",(req, res)=>{
    res.send("Backend is running");
});

//app.use("/api/auth",authRoutes);
//Product API
//app.use("/api/products", productRoutes);
//Start server
app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
app.get("/api/seed", async (req, res) => {
  const Product = require("./models/Product");

  try {
    await Product.deleteMany(); // prevents duplicates

    await Product.insertMany([
      {
        name: "Nike Air Max",
        price: 9999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        brand: "Nike"
      },
      {
        name: "Adidas Ultraboost",
        price: 12999,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
        brand: "Adidas"
      },
      {
        name: "Puma RS-X",
        price: 8999,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        brand: "Puma"
      }
    ]);

    res.send("Products Added 🔥");
  } catch (err) {
    res.status(500).send(err.message);
  }
});*/
/*const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// ✅ MIDDLEWARE (TOP PE)
app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// ✅ ORDER ROUTES
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

// ✅ START SERVER
//app.listen(5000, () => {
 // console.log("Server running on port 5000");
//});

// ✅ DB CONNECT (LAST ME)
//mongoose.set("strictQuery",false);
mongoose.connect("mongodb://admin:admin123@ac-j473qhz-shard-00-00.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-01.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-02.xfi8fdd.mongodb.net:27017/?ssl=true&replicaSet=atlas-nylq9b-shard-0&authSource=admin&appName=Cluster0")
.then(()=> { console.log("MongoDB Connected");
app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
})
.catch(err => console.log(err));*/
/*const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// 🔥 DEBUG ROUTE (NO DB)
app.get("/test", (req, res) => {
  res.send("Server working ✅");
});

// 🔥 CONNECT DB FIRST
mongoose.connect(
  "mongodb://admin:admin123@ac-j473qhz-shard-00-00.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-01.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-02.xfi8fdd.mongodb.net:27017/?ssl=true&replicaSet=atlas-nylq9b-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected ✅");

  // 🔥 SIMPLE TEST MODEL
  const Order = mongoose.model(
    "Order",
    new mongoose.Schema({ name: String })
  );

  // 🔥 TEST ROUTE WITH DB
  app.get("/orders-test", async (req, res) => {
    try {
      const data = await Order.find();
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
})
.catch(err => console.log(err));*/
/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Disable buffering (IMPORTANT)
mongoose.set("bufferCommands", false);

// ✅ Routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

// ✅ Connect DB FIRST, then start server
mongoose.connect(
  "mongodb://admin:admin123@ac-j473qhz-shard-00-00.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-01.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-02.xfi8fdd.mongodb.net:27017/sneakerDB?ssl=true&replicaSet=atlas-nylq9b-shard-0&authSource=admin",
  {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  }
)
.then(() => {
  console.log("✅ MongoDB Connected");

  app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
  });
})
.catch((err) => {
  console.log("❌ DB Error:", err);
});*/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ ROUTES IMPORT
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

// ✅ ROUTES USE (👉 YAHI ADD KARNA THA)
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// ✅ TEST ROUTE (optional)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ SEED ROUTE
app.get("/api/seed", async (req, res) => {
  const Product = require("./models/Product");

  try {
    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Nike Air Max",
        price: 9999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        brand: "Nike",
      },
      {
        name: "Adidas Ultraboost",
        price: 12999,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
        brand: "Adidas",
      },
      {
        name: "Puma RS-X",
        price: 8999,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        brand: "Puma",
      },
    ]);

    res.send("Products Added 🔥");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ✅ DB CONNECT + SERVER START
mongoose.connect("mongodb://admin:admin123@ac-j473qhz-shard-00-00.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-01.xfi8fdd.mongodb.net:27017,ac-j473qhz-shard-00-02.xfi8fdd.mongodb.net:27017/sneakerDB?ssl=true&replicaSet=atlas-nylq9b-shard-0&authSource=admin")
.then(() => {
  console.log("MongoDB Connected");

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
})
.catch((err) => console.log(err));