import './styles/partials/_global.scss';
import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/header/header';
import CardsList from './components/CardsList/CardsList';
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile.jsx'
import { getStock, setUserSheet } from '../src/utils/utils'
import { myGlobalState } from './components/ContextStore/ContextStore';


function App() {
  const [stockNames, setStockNames] = useState([])
  const [stocks, setStocks] = useState([])
  const [userSheet, setUserSheet] = useState(null)
  const [user, setUser] = useState(null)


  const loadStocks = () => {
    setStocks(() => [])

    stockNames.forEach(stock => {
      getStock(stock, setStocks)
        .then(res => {
          setStocks(old => [...old, res.data.data])
        })
    })
  }


  useEffect(() => {
    setStockNames(() => ['AAPL', 'ADXS', 'MSFT', "AMD"])

    if (user && userSheet && userSheet.fav !== []) {
      setStockNames(userSheet.fav)
    }

    loadStocks()
  }, [user, userSheet])


  useEffect(() => {
    loadStocks()
  }, [stockNames])



  return (

    <div className="App">
      <myGlobalState.Provider value={{ user, setUser, userSheet, setUserSheet, stocks, setStocks, stockNames, setStockNames }}>
        <Header />
        <Profile />
        <CardsList stocks={stocks} />
        <Footer />
      </myGlobalState.Provider>
    </div>

  );
}


export default App;
