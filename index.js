const connectToMongo=require("./db")
const express = require('express')
const cors=require('cors')
require('dotenv').config()
connectToMongo() ;

const app = express()
app.use(cors())
const port = process.env.PORT 

app.use(express.json()) 

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})