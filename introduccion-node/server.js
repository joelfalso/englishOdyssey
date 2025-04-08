const express = require('express');
const cors = require ('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res)=>{
    res.send("Conexion de Servidor Exitosa");

});

app.get('/api/data/', (req, res)=>{
    const data = {message: "Mensaje de Servidor"}
    res.json(data);
} );

app.listen(port,() =>{
    console.log('Servidor Corriendo en el puerto 3000');
});