import { useEffect } from "react";
import "./section.css";
import { FaFacebookF, FaInstagram, FaRegSnowflake, FaTelegram } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="contact-icon-start">
                <FaRegSnowflake />
            </div>

            {/* Section 1 */}
            <div className="section1__contact">
                <div className="container">
                    <div className="section1__contact__wrap">
                        <div className="section1__contact__title">HOW CAN WE HELP?</div>
                        <div className="section1__contact__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 1 */}

            {/* Section 2 */}
            <div className="section2__contact">
                <div className="container">
                    <div className="section2__contact__wrap">
                        <div className="section2__contact__box">
                            <FaQuestion />
                            <div className="section2__contact__title">GUIDES</div>
                            <div className="section2__contact__desc"> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div className="section2__contact__box">
                            <FaQuestion />
                            <div className="section2__contact__title">FAQS</div>
                            <div className="section2__contact__desc"> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div className="section2__contact__box">
                            <FaQuestion />
                            <div className="section2__contact__title">COMMUNITY</div>
                            <div className="section2__contact__desc"> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 2 */}

            {/* Section 3 */}
            <div className="contact-icon-start">
                <FaRegSnowflake />
            </div>
            <div className="section1__contact">
                <div className="container">
                    <div className="section1__contact__wrap">
                        <div className="section1__contact__title">HOW CAN WE HELP?</div>
                    </div>
                </div>
            </div>

            {/* End Section 3 */}

            {/* Section 4 */}
            <div className="section4__contact">
                <div className="container">
                    <div className="section4__contact__box">
                        <div className="section4__contact__info">
                            <p className="section4__contact__title">Our Address</p>
                            <p className="section4__contact__desc">98823 FRANECKI SPUR CHICAGO, IDAHO 99875</p>
                        </div>
                        <button>VISIT US</button>
                    </div>
                    <hr />
                    <div className="section4__contact__box">
                        <div className="section4__contact__info">
                            <p className="section4__contact__title">Send Message</p>
                            <p className="section4__contact__desc">mnrealest161@gmail.com</p>
                        </div>
                        <button>SEND MESSAGE</button>
                    </div>
                    <hr />
                    <div className="section4__contact__box">
                        <div className="section4__contact__info">
                            <p className="section4__contact__title">Talk With Us</p>
                            <p className="section4__contact__desc">98823 FRANECKI SPUR CHICAGO, IDAHO 99875</p>
                        </div>                        
                        <button>+84 (234) 567 890</button>
                    </div>
                </div>
            </div>
            {/* End Section 4 */}

            {/* Section 5 */}
            <div className="section5__contact">
                <div className="section5__contact__title">Social</div>
                <div className="container">
                    <div className="section5__contact__info">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTelegram />
                    </div>
                    <div className="section5__contact__button-call">
                        <Link to="tel:+123456789" class="call-button">Gọi ngay</Link>
                    </div>
                </div>
            </div>
            {/* End Section 5 */}
        </>
    )
}

export default Contact;