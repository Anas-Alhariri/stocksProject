import './CardsList.scss'
import StockCard from '../stock-card/stock-card'
import { myGlobalState } from '../ContextStore/ContextStore';
import { useContext, useState } from 'react'
import { getStocks } from '../../utils/utils';
import { useEffect } from 'react';

const CardsList = () => {
    const { user, setUser, userSheet, setUserSheet, stockNames, setStockNames, stocks, setStocks } = useContext(myGlobalState)

    useEffect(() => {
        getStocks(stockNames, setStocks)
    }, [])

    return (
        <div className="cardsList">
            {stocks.map((stock, i) => {
                return <StockCard key={i} stock={stock} />
            })}
        </div>
    )
}

export default CardsList
