const app = require('express')()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT||PORT;
require('./helpers/gtb')

app.listen(PORT,()=>{console.log("money currently running on", PORT)})