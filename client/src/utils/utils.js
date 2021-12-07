import axios from 'axios'
import { API_KEY } from '../api/AppInfo'



export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const getStocks = async (stockNames, setStocks) => {
    setStocks(() => [])
    let counter = 0
    let stock = stockNames[counter]

    let API_LINK = `https://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${stock}`
    while (counter < stockNames.length) {
        stock = stockNames[counter]
        API_LINK = `https://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${stock}`
        axios.get(API_LINK)
            .then(res => {
                setStocks(old => [...old, res.data.data])
            })
            .catch(err => {
                console.log(err);
            })

        counter++
        if (counter < stockNames.length) {
            stock = stockNames[counter]
        } else {
            break
        }
        await sleep(80)
    }
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