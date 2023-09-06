import { Link, NavLink } from 'react-router-dom';
import images from '../Images/Images';
import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className="header-logo">
                    <Link to="/warehouses" className="header-logo__link">
                        <img className="header-logo__img" src={images.BookwormTwo} alt="our logo" />
                    </Link>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav__list">
                        <li className="header-nav__list-item">
                            <NavLink to="/" className="header-nav__link">Home</NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink to="/search" className="header-nav__link">Search Books</NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink to="/message" className="header-nav__link">Message</NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink to="/about" className="header-nav__link">About</NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink to="/contact" className="header-nav__link">Contact Us</NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink to="/login" className="header-nav__link">Sign In</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;