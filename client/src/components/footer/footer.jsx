import './footer.scss'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                    <p className='footer__contact'>Contact</p>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                    <p className='footer__about-us'>About Us</p>
                </Link>
            </div>
        </footer>
    )
}
