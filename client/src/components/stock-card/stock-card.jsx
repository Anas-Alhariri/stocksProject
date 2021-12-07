
import './stock-card.scss'
import Chart from './Chart/Chart'
import { myGlobalState } from '../ContextStore/ContextStore';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

export default function StockCard(props) {
    const { user, setUser, userSheet, setUserSheet, stockNames, setStockNames, stocks, setStocks } = useContext(myGlobalState)
    const navigate = useNavigate();
    const addToFav = () => {
        if (user) {
            const sym = props.stock[0].symbol
            let fav = [...userSheet.fav, sym]
            let newSheet = { ...userSheet, fav }
            setUserSheet(newSheet)
            setStockNames(newSheet.fav)
        }
    }

    const removeFromFav = () => {
        const sym = props.stock[0].symbol
        let fav = userSheet.fav.filter(symbol => symbol !== sym)
        let newSheet = { ...userSheet, fav }
        setUserSheet(newSheet)
        setStockNames(newSheet.fav)
    }

    return (
        <>
            {props.stock &&
                <section className='stock-card'>
                    {
                        user && userSheet ?
                            !userSheet.fav.includes(props.stock[0].symbol) ?
                                <p className="stock-card__favicon" onClick={addToFav}>+</p>
                                :
                                <p className="stock-card__favicon" onClick={removeFromFav}>-</p>
                            :
                            <p className="stock-card__favicon" onClick={addToFav}>+</p>
                    }
                    <div>
                        <Chart data={props.stock} />
                        <p className='stock-card__title'>View Details</p>
                    </div>
                </section>
            }
        </>
    )
}