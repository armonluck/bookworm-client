import { Link, NavLink } from 'react-router-dom';
import images from '../Images/Images';
import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className="header-logo">
                    <Link to="/" className="header-logo__link">
                        <img className="header-logo__img" src={images.BookwormTwo} alt="our logo" />
                    </Link>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav__list">
                        <li className="header-nav__list-item">
                            <NavLink to="/" className="header-nav__link">Home</NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink to="/browse" className="header-nav__link">Browse Books</NavLink>
                        </li>
                        {/* <li className="header-nav__list-item">
                            <NavLink to="/testing" className="header-nav__link">Browse Testing</NavLink>
                        </li> */}
                        <li className="header-nav__list-item">
                            <NavLink to="/messages" className="header-nav__link">Message</NavLink>
                        </li>
                        {/* <li className="header-nav__list-item">
                            <NavLink to="/testing2" className="header-nav__link">Message Testing</NavLink>
                        </li> */}
                        <li className="header-nav__list-item">
                            <NavLink to="/about" className="header-nav__link">About</NavLink>
                        </li>
                        <li className="header-nav__list-item">
                            <NavLink to="/login" className="header-nav__link">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;