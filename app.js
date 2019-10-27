const express = require('express');
const path = require('path')

const app = express() 
app.use(express.json())

const publicDirectoryPath = path.join(__dirname,'/public')
app.use(express.static(publicDirectoryPath))


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port : '+ port)
})