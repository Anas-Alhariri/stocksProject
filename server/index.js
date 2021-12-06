const express = require('express')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(cors())

let users = []

app.get("/users", (req, res) => {
    fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
        users = data
        console.log(users)
        res.send(users).status(200)
    })
});

app.get("/", (req, res) => {
    res.send('Users API Documentation Page')
});

const port = process.env.PORT || 5001;

app.listen(port, () => `Server running on port ${port} 🔥`);