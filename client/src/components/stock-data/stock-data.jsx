import './stock-data.scss'

export default function StockData() {
    return (
        <section className='stock-data'>
            <div className='stock-data__title-container'>
                <h1 className='stock-data__symbol'>Symbl</h1>
            </div>
            <div className='stock-data__main-container'>
                <p className='stock-data__open'>Open: </p>
                <p className='stock-data__open'>High: </p>
                <p className='stock-data__open'>Low: </p>
                <p className='stock-data__open'>Close: </p>
            </div>
        </section>
    )
}