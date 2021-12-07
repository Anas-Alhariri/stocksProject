import './stock-data.scss'
import { myGlobalState } from '../ContextStore/ContextStore';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function StockData(props) {
    const { sym } = useParams();
    const { stocks } = useContext(myGlobalState)
    const [stockDetails, setStockDetails] = useState([])

    useEffect(() => {
        const details = stocks.find(stock => stock[0].symbol === sym)[0]
        setStockDetails(details)
    }, []);

    const { open, close, low, high, volume } = stockDetails

    return (
        <section className='stock-data'>
            <div className='stock-data__title-container'>
                <h1 className='stock-data__symbol'>{sym}</h1>
            </div>
            <div className='stock-data__main-container'>
                <p className='stock-data__open'>Open: {open} </p>
                <p className='stock-data__open'>High: {high}</p>
                <p className='stock-data__open'>Low: {low}</p>
                <p className='stock-data__open'>Close: {close}</p>
                <p className='stock-data__open'>Volume: {volume}</p>
            </div>
        </section>
    )
}