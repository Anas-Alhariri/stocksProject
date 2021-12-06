import './styles/partials/_global.scss';
import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/header/header';
import CardsList from './components/CardsList/CardsList';
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile.jsx'
import { getStock, getUserSheet } from '../src/utils/utils'
import { getUsersList, findUserById, createUserSheet } from '../src/utils/utils';


function App() {
  const stockNames = ['AAPL', 'ADXS', 'MSFT', "AMD"]
  const [stocks, setStocks] = useState([])
  const [userSheet, setUserSheet] = useState(null)

  useEffect(() => {
    stockNames.forEach(stock => {
      getStock(stock, setStocks)
    })

    setUserSheet(getUserSheet(1))
    console.log(userSheet);
    // getUsersList()
    // console.log(findUserById(1))
    // 
    // let user = {
    // id: 2,
    // name: 'maxim',
    // email: 'eng.anas.alhariri@gmail.com',
    // }
    // let userSheet = createUserSheet(user)
    // console.log(userSheet)




  }, [])



  return (

    <div className="App">
      <Header />
      <Profile />
      {/* <h1>{userSheet}</h1> */}
      <CardsList stocks={stocks} />
      <Footer />
    </div>
  );
}


export default App;
