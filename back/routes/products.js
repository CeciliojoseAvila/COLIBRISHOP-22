const express=require("express");
const app = require("../app");
const router=express.Router();

const {getProducts}=require("../controllers/productsControllers") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //establecemos la ruta en la que queremos ver el getProducts

module.exports=router; //comprobamos en postman asi: localhost:4000/api/productos
