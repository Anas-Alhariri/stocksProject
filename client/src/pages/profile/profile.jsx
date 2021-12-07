import './profile.scss'
import { useContext } from 'react'
import { myGlobalState } from '../../components/ContextStore/ContextStore'


export default function Profile() {
    const { user, setUser, userSheet, setUserSheet, stockNames, setStockNames } = useContext(myGlobalState)

    return (
        <section className="user-profile">
            {user ?
                <>
                    <img src={user.photoURL} alt="user pic" />
                    <h1 className="user-profile__username">{user.displayName}</h1>
                    <h1 className="user-profile__email">{user.email}</h1>
                    <div className="user-profile__fav-stocks">
                        <h3 className="user-profile__fav-stocks__title">Favorite Stocks List</h3>
                        <ol className="user-profile__fav-stocks__list">
                            {userSheet.fav.map(stock => {
                                return <li className="user-profile__fav-stocks__list-item">{stock}</li>
                            })}
                        </ol>
                    </div>
                </>
                :
                <h1>There is no user logged in!</h1>
            }
            <div>

            </div>

        </section>
    )
}

