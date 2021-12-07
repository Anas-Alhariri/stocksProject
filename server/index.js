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

        let user = jsonData.find(user => user.id === id)


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

                }
            })
        }

        res.send(user).status(200)
    })
});

app.put('/update-sheet/:id', (req, res) => {
    const id = req.param('id')
    fs.readFile('./data/usersData.json', 'utf8', (err, data) => {
        let jsonData = JSON.parse(data)

        let user = jsonData.find(user => user.id === id)


        if (!user) {
            // TODO: Change the values from the body of the request. (The data object being sent to the backend.)
            let userSheet = {
                id: id,
                fav: [...data.fav],
                recent: []
            }
        } else {

            let userSheet = {
                id: id,
                fav: data.recent ? [...data.fav] : [],
                recent: data.recent ? [...data.recent] : []
            }

            let newData = jsonData.filter(userSheet => userSheet.id !== id)
            newData.push(userSheet)

            fs.writeFile('./data/usersData.json', JSON.stringify(newData, null, 2), 'utf-8', (err) => {
                if (err) {

                }
            })
        }

        res.send(newData).status(200)
    })

})
const port = process.env.PORT || 5001;

app.listen(port, () => `Server running on port ${port} 🔥`);