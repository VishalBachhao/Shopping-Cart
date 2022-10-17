//-------------------------------------------------importing module---------------------------------------------------

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../auth/auth")
const ProductController = require('../controllers/productController')
//-------------------------------------------------------------------------------------------------------------

//===============================================FEATURE I=============================================================

//------------ user registration -----------------
router.post("/register", userController.createUser);

//------------------- user login -----------------
router.post("/login", userController.loginUser);

//------------ get user by user ID ----------------
router.get("/user/:userId/profile",auth.authentication,userController.getUser)

//----------------- update User profile ------------------
router.put("/user/:userId/profile",auth.authentication, auth.authorization, userController.updateUser)

//===============================================FEATURE II=============================================================

//----------------create product--------------------------
router.post("/products", ProductController.createProduct);

//------------ get product  -----------
router.get("/products",ProductController.productDetail)

//------------ get product by product ID -----------
router.get("/products/:productId" ,ProductController.getProductById)

//--------------update product by product ID-------
router.put("/products/:productId", auth.authentication, auth.authorization, ProductController.updateProduct)

//--------------delete  product by product ID-------
router.delete("/products/:productId" ,ProductController.deleteProductById)

//------------ edge case for wrong route------------
router.all("/*",(req,res)=>{res.status(400).send({status:false,message:"Endpoint is not correct"})})


//-------------------------------------------------exporting router---------------------------------------------------

module.exports = router;