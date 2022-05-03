// server.js

/*const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world from Saloni!')
})

app.listen(80, () => {
    console.log('Server is up on 80')
})
*/

const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    if(process.env.ENV_NODE === "production")
        res.status(200).send({"code": 2000, "msg": "Production Mode: Hello From Saloni!"})
    else
        res.status(200).send({"code": 2000, "msg": "Local Mode: Healthcheck is success!"})
})

app.listen(5000, () =>{
    console.log("Server is running...");
})