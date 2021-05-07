const express = require("express");
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT||PORT;
app.use(express.json());
app.use(cors())
app.use("/",require('./routes/routes') )

app.listen(PORT,()=>{console.log("money currently running on", PORT)})