const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello, World ! ✋'))

app.listen(port, () => console.log(`My node app is running on : http://localhost:${port}`))