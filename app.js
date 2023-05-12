const express = require('express')
const app = express();
const dotenv = require('dotenv')

app.use(express.json());
dotenv.config();

app.get( '/', (req, res)=> {
    console.log('Succuessfullu Deployment of nodejs application using render server')
})

app.listen(process.env.PORT || 5001, async ()=>{
    console.log(`Listen to server connected to PORT ${process.env.PORT || 5001}`);
})