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
import { Routes, Route } from "react-router-dom";
import AboutUs from './pages/about-us/about-us';
import Contact from "./pages/contact/contact";



function App() {
  const [stockNames, setStockNames] = useState(['AAPL', 'ADXS', 'MSFT', "AMD"])
  const [stocks, setStocks] = useState([])
  const [userSheet, setUserSheet] = useState(null)
  const [user, setUser] = useState(null)


  useEffect(() => {
    // if (user && userSheet && userSheet.fav.length > 0) {
    //   setStockNames(userSheet.fav)
    // }
  }, [userSheet])


  return (
    <div className="App">
      <myGlobalState.Provider value={{ user, setUser, userSheet, setUserSheet, stocks, setStocks, stockNames, setStockNames }}>
        <Header />
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </myGlobalState.Provider>
    </div >

  );
}


export default App;
