console.log("Hej från Git");
console.log("Hejdå från Emma<3")


const express = require ('express');
const app = express();
app.get('/', (req,res) => {res.send("Hejsanhoppsan")})
app.listen(3000, ()=>console.log('Server redo'));