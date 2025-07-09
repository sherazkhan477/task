// const disconnectToMongo = require('./db');
const connectTOMongo = require('./db');
const express = require('express')

connectTOMongo();

const app = express()
const port = 3000

app.use(express.json())

app.use('/auth', require('./routes/auth'))
app.use('/task', require('./routes/task'))

app.get('/', (req, res) => {
    // res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})