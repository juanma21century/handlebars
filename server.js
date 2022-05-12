// https://www.iconfinder.com/free_icons imagenes iconos
const express = require("express");

const app = express();

const productos = []

app.use(express.urlencoded({ extended: true }));

app.set('views', './Coder/entregable-handlebars/views')

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("inicio", {productos});
});

app.post('/productos',(req,res)=>{
    productos.push(req.body)
    res.redirect('/')
})

const server = app.listen(8080, () => {
  console.log("Servidor corriendo");
});