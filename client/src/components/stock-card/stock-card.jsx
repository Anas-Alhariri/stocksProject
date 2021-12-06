import './stock-card.scss'
import Chart from './Chart/Chart'

export default function StockCard(props) {
    return (
        <>
            {props.stock &&
                <section className='stock-card'>
                    <div>
                        <Chart data={props.stock} />
                        <p className='stock-card__title'>{props.stock[0].symbol}</p>
                    </div>
                </section>
            }
        </>
    )
}