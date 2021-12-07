import './styles/partials/_global.scss';
import './App.css';
import { useState } from 'react'
import Header from './components/header/header';
import CardsList from './components/CardsList/CardsList';
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile.jsx'
import { myGlobalState } from './components/ContextStore/ContextStore';
import { Routes, Route } from "react-router-dom";
import AboutUs from './pages/about-us/about-us';
import Contact from "./pages/contact/contact";
import StockData from './components/stock-data/stock-data';



function App() {
  const [stockNames, setStockNames] = useState(['AAPL', 'ADXS', 'MSFT', "AMD", "FB", "GOOG", "AMZN"])
  const [stocks, setStocks] = useState([])
  const [userSheet, setUserSheet] = useState(null)
  const [user, setUser] = useState(null)



  return (
    <div className="App">
      <myGlobalState.Provider value={{ user, setUser, userSheet, setUserSheet, stocks, setStocks, stockNames, setStockNames }}>
        <Header />
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stockDetails/:sym" element={<StockData />} />
        </Routes>
        <Footer />
      </myGlobalState.Provider>
    </div >

  );
}


export default App;
