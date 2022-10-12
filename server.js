const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello')
})

let nama;

app.post('/:nama', (req, res) => {
    nama = req.params
    res.send(nama)
})

app.listen(port, () => { console.log(`server is running on port ${port}`)})