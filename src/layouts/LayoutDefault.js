import { FaBars, FaFacebookF, FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaSquareXmark } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import ButtonScrollToTop from "../components/ButtonScrollToTop";
import "./css/LayoutDefault.css";
import logo from "./images/logo-refund.png";
import { useState } from "react";

const LayoutDefault = () => {
    const [ showMenu, setShowMenu ] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <header className="header">
                <div className='header__wrap'>
                    <div className='header__logo'>
                        <Link to="/"><img src={logo} alt='Logo' /></Link>
                        <span>REFUND GAMING</span>
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
                    <div className={"header__bar " + (showMenu ? "header__bar-showMenu" : "")} onClick={handleShowMenu}>
                        {showMenu ? <FaSquareXmark /> : <FaBars />}

                        <div className="header__show-menu">
                            <NavLink to="/" className='header__show-text'>Home</NavLink>
                            <NavLink to="/about" className='header__show-text'>About</NavLink>
                            <NavLink to="/services" className='header__show-text'>Services</NavLink>
                            <NavLink to="/contact" className='header__show-text'>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet />

            <div className="footer__top">
                <div className="container">
                    <div className="footer__top__wrap">
                        <div className="footer__top__content">
                            <div className="footer__top__title">REFUND GAMING</div>
                            <div className="footer__top__desc">Bất cứ nơi đâu - Luôn luôn có mặt kịp thời</div>
                            <hr />
                            <div className="footer__top__hotline">Hotline : 0123456789</div>
                            <div className="footer__top__email">Email : mnrealest161@gmail.com</div>
                            <hr />
                            <div className="footer__top__desc">Lựa chọn và tin tưởng chúng tôi</div>
                            <div className="footer__top__social">
                                <Link target="_blank" to="https://www.facebook.com/profile.php?id=61557704135100"><FaFacebookF className="footer__top__icon" /></Link>
                                <Link target="_blank" to="https://www.instagram.com/if_camap24/"><FaInstagram className="footer__top__icon" /></Link>
                                <Link><FaTelegramPlane className="footer__top__icon" /></Link>
                            </div>
                        </div>
                        <div className="footer__top__map">
                            <iframe title="Bản đồ vị trí" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31336.722009616875!2d106.8116908743164!3d10.956555000000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174de89d5e34a1f%3A0x8ae0de15c48ec8ee!2zVHLGsOG7nW5nIFRIUFQgTMOqIFF1w70gxJDDtG4!5e0!3m2!1svi!2s!4v1730381374376!5m2!1svi!2s"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <ButtonScrollToTop />
            <footer className='footer'>
                Copyright 2024 60F - All Right Reserved
            </footer>
        </>
    )
}

export default LayoutDefault;