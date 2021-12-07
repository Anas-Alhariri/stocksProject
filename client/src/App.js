import './styles/partials/_global.scss';
import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/header/header';
import CardsList from './components/CardsList/CardsList';
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile.jsx'
import { getStock, setUserSheet } from '../src/utils/utils'
import { myGlobalState } from './components/ContextStore/ContextStore';
import { sleep } from '../src/utils/utils'

function App() {
  const [stockNames, setStockNames] = useState(['AAPL', 'ADXS', 'MSFT', "AMD"])
  const [stocks, setStocks] = useState([])
  const [userSheet, setUserSheet] = useState(null)
  const [user, setUser] = useState(null)
  const [didUpdate, setDidUpdate] = useState(false)

  const loadStocks = () => {
    stockNames.forEach(async stock => {
      await sleep(1000);
      getStock(stock, setStocks)
    })
  }

  useEffect(() => {
    if (user && userSheet && userSheet.fav.length > 0) {
      setStockNames(userSheet.fav)
      console.log('userSheet :', userSheet.fav);
      console.log('user :', user);
      setDidUpdate(true)
    }
    console.log("Stock Names:", stockNames)
    loadStocks()
  }, [userSheet])

  useEffect(() => {
    if (didUpdate)
      loadStocks()
    return () => {
      setDidUpdate(false)
    }
  }, [stocks])

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
