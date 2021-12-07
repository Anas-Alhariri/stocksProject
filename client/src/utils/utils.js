import axios from 'axios'
import { API_KEY } from '../api/AppInfo'



export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const getStock = (sym, setStocks) => {
    const API_LINK = `https://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${sym}`

    setStocks(() => [])

    axios.get(API_LINK)
        .then(res => {
            setStocks(old => [...old, res.data.data])
        })
        .catch(err => {
            console.log(err);
        })
}


export const getUserSheet = (uid) => {
    let responsePromise = axios
        .get(`http://localhost:5001/user/${uid}`)
        .catch(err => {
            console.log(err)
        })
    return responsePromise
}

export const updateUserFav = (sym) => {

}