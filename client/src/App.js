import './styles/partials/_global.scss';
import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/header/header';
import CardsList from './components/CardsList/CardsList';
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile.jsx'
import { getStock, getUserSheet } from '../src/utils/utils'
import { myGlobalState } from './components/ContextStore/ContextStore';


function App() {
  const [stockNames, setStockNames] = useState([])
  const [stocks, setStocks] = useState([])
  const [userSheet, setUserSheet] = useState(null)
  const [user, setUser] = useState(null)


  const loadStocks = () => {
    stockNames.forEach(stock => {
      getStock(stock, setStocks)
    })
  }


  useEffect(() => {
    setStockNames((old) => ['AAPL', 'ADXS', 'MSFT', "AMD"])

    if (user && userSheet) {
      console.log(user)
      console.log(userSheet)

      if (userSheet.fav !== []) {
        console.log(userSheet.fav)
        setStockNames((old) => userSheet.fav)
      }
    }

    // loadStocks()
  }, [user, userSheet])

  useEffect(() => {
    loadStocks()
    console.log(stockNames)

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
