import './header.scss'
import userIcon from '../../assets/Images/user-svgrepo-com.svg'
import whaleIcon from '../../assets/Images/whale-svgrepo-com (1).svg'
import chartIcon from '../../assets/Images/line-chart-svgrepo-com.svg'
import googleLogo from '../../assets/Images/google-login.png'
import { myGlobalState } from '../ContextStore/ContextStore';
import { useContext, useEffect, useState } from 'react'
import { signInWithGoogle } from '../../utils/Firebase'
import { getUserSheet } from '../../utils/utils'


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
                    <h1 className='header__title'>Blue Watch</h1>
                    <img className='header__chart-icon' src={chartIcon} alt="chart-icon" />
                </div>
                {
                    user && user.photoURL ?
                        <>
                            <h4 className='header__user-name'>{user.displayName}</h4>
                            <img className='header__user-icon' alt='user icon' src={user.photoURL} />
                        </>
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