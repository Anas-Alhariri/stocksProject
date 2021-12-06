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


app.get("/user/:id", (req, res) => {
    fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
        // ? Review params
        let id = req.param("id")
        let jsonData = JSON.parse(data)
        console.log(jsonData);
        let user = jsonData.find(user => user.id === id)

        console.log(user);
        if (!user) {
            let userSheet = {
                id: id,
                fav: [],
                recent: []
            }

            jsonData.push(userSheet)
            user = userSheet
            fs.writeFile('./data/usersData.json', JSON.stringify(jsonData, null, 2), 'utf-8', (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }

        console.log(user)
        res.send(user).status(200)
    })
});


const port = process.env.PORT || 5001;

app.listen(port, () => `Server running on port ${port} 🔥`);