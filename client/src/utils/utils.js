// import data from '../data/usersData.json'
import axios from 'axios'
import { API_KEY } from '../api/AppInfo'
// import fs from 'browserify-fs'

// const fs = require('browserify-fs')

let data

export const getStock = (sym, setStocksFun) => {
    const API_LINK = `https://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${sym}`
    axios.get(API_LINK)
        .then(res => {
            setStocksFun(old => [...old, res.data.data])
        })
        .catch(err => {
        })
}

export const getUsersList = () => {
    axios.get("http://localhost:5001/users")
        .then(res => {
            data = res.data
            console.log(data);
        })
        .catch(err => console.error(err));
    return data
}

export const findUserById = (id) => {
    const foundUser = data.find(user => user.id === id)
    return foundUser
}

export const createUserSheet = (user) => {
    // const foundUser = findUserById(user.id)
    // if (foundUser) {
    //     console.log("user exist")
    //     return foundUser
    // }
    // const userSheet = {
    //     id: user.id,
    //     name: user.name,
    //     email: user.email,
    //     photo: user.photo || null,
    //     favStocks: user.favStocks || [],
    //     recentViewed: user.recentViewed || []
    // }

    // data.push(userSheet)

    // console.log(process.cwd())
    // fs.writeFile('usersData.json', JSON.stringify(data, null, 2), 'utf-8',
    //     (err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("The data was written successfully")
    //         }
    //     })

    // return userSheet
}

// fs.writeFile('./data/video-details.json', JSON.stringify(newData, null, 2), 'utf-8', () => {
//     console.log(newData)
// })