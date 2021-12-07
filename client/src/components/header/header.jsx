import './header.scss'
import chartIcon from '../../assets/Images/line-chart-svgrepo-com.svg'
import googleLogo from '../../assets/Images/google-login.png'
import { myGlobalState } from '../ContextStore/ContextStore';
import { useContext } from 'react'
import { signInWithGoogle } from '../../utils/Firebase'
import { getUserSheet } from '../../utils/utils'
import { Link } from 'react-router-dom';


export default function Header() {
    const { user, setUser, userSheet, setUserSheet, stockNames, setStockNames } = useContext(myGlobalState)

    const login = () => {
        signInWithGoogle()
            .then(res => {
                let currentUser = { ...res.user }
                setUser({ ...currentUser })
                getUserSheet(currentUser.uid)
                    .then(res => {
                        setUserSheet(res.data)
                    })
            })
    }


    return (
        <header className='header'>
            <div className='header__inner-container'>
                <div className='header__title-container'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <h1 className='header__title'>Blue Watch</h1>
                    </Link>
                    <img className='header__chart-icon' src={chartIcon} alt="chart-icon" />
                </div>
                {
                    user && user.photoURL ?
                        <div style={{ display: 'flex' }}>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'white', display: 'flex' }}>
                                <h4 className='header__user-name'>{user.displayName}</h4>
                                <img className='header__user-icon' alt='user icon' src={user.photoURL} />
                            </Link>
                            <button onClick={() => { setUser(null) }}>Sign out</button>

                        </div>
                        :
                        <>
                            <button className='header__google-btn' onClick={login}>
                                <img className='header__google-icon' src={googleLogo} alt="user login" /> Sign in
                            </button>
                        </>
                }
            </div>

        </header>
    )
}