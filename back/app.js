const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")

app.use('/api', productos) //sugeto a modificacion

module.exports=app
//hacemos consultas desde el terminal de VSC cd .. hasta llegar a la c. raiz  / cd "Program Files"
