const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    
})

app.patch('/', (req, res) => {

})

app.delete('/', (req, res) => {
    
})

app.listen(port, () => {console.log('server is running')})