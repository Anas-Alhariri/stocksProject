import './CardsList.scss'
import StockCard from '../stock-card/stock-card'

const CardsList = (props) => {
    return (
        <div className="cardsList">
            {props.stocks.map((stock, i) => {
                return <StockCard key={i} stock={stock} />
            })}
        </div>
    )
}

export default CardsList
