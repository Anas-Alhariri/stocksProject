import './header.scss'
import userIcon from '../../assets/Images/user-svgrepo-com.svg'
import whaleIcon from '../../assets/Images/whale-svgrepo-com (1).svg'
import chartIcon from '../../assets/Images/line-chart-svgrepo-com.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className='header__inner-container'>
                <div className='header__title-container'>
                    <h1 className='header__title'>Blue Watch</h1>
                    <img className='header__chart-icon' src={chartIcon}></img>
                </div>
                <img className='header__user-icon' alt='user icon' src={userIcon}></img>
            </div>
        </header>
    )
}