import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./css/LayoutDefault.css";

const LayoutDefault = () => {
    return (
        <>
            <header className="header">
                <div className='header__wrap'>
                    <div className='header__logo'>
                        <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/2/22/SPACESPEAKERS_Logo.png' alt='Logo' /></Link>
                        <span>SPACESPEAKERS</span>
                    </div>
                    <div className='header__menu'>
                        <ul>
                            <li><NavLink to="/" className='header__menu-text'>Home</NavLink></li>
                            <li><NavLink to="/about" className='header__menu-text'>About</NavLink></li>
                            <li><NavLink to="/services" className='header__menu-text'>Services</NavLink></li>
                            <li><NavLink to="/contact" className='header__menu-text'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className='header__social'>
                        <ul>
                            <li><Link target='_blank' to="https://www.facebook.com/profile.php?id=61557704135100">
                                <FaFacebookF className="header__social-icon" />
                                </Link>
                            </li>
                            <li><Link target='_blank' to="https://www.instagram.com/if_camap24">
                                <FaInstagram className="header__social-icon" />
                                </Link>
                            </li>
                            <li><Link target='_blank' to="https://github.com/minhnhat60">
                                <FaGithub className="header__social-icon"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer className='footer'>
                Copyright 60F-Technology
            </footer>
        </>
    )
}

export default LayoutDefault;