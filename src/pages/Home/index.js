import ButtonAbout from "../../components/ButtonAbout";
import ButtonServices from "../../components/ButtonServices";
import "./section.css";
import pic1 from "./images/pic-1.jpg";
import pic6 from "./images/pic-6.1.jpg";
import { FaBalanceScale, FaCrosshairs, FaFire, FaIcons, FaRegHandLizard, FaRegHandshake, FaRoute } from "react-icons/fa";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            {/* Section 1 */}
            <div className="section1">
                <div className="container">
                    <div className="section1__wrap">
                        <div className="section1__sub-title">Developer Company</div>
                        <div className="section1__title wow bounceInLeft" data-wow-duration="2s">Refund Gaming</div>
                        <div className="section1__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda aperiam.</div>
                        <div className="section1__button">
                            <ButtonServices />
                            <ButtonAbout text={"Learn More..."}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 1 */}

            {/* Section 2 */}
            <div className="section2">
                <div className="container">
                    <div className="section2__wrap">
                        <div className="section2__image">
                            <img src={pic1} alt="anh-2"/> 
                        </div>
                        <div className="section2__content">
                            <h2 className="section2__sub-title">Core Features</h2>
                            <div className="section2__title">Best Business <br />
                            Software Solution</div>
                            <div className="section2__list">
                                <div className="section2__item wow bounceInRight" data-wow-duration="1s" data-wow-delay="1s" >
                                    <FaFire className="section2__icon" />
                                    <span>faith</span>
                                </div>
                                <div className="section2__item wow bounceInRight" data-wow-duration="2s" data-wow-delay="1s" >
                                    <FaIcons className="section2__icon"/>
                                    <span>symphony</span>
                                </div>
                                <div className="section2__item wow bounceInRight" data-wow-duration="3s" data-wow-delay="1s" >
                                    <FaBalanceScale className="section2__icon"/>
                                    <span>balance</span>
                                </div>
                            </div>
                            <div className="section2__desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>

                            <ButtonAbout text={"Read More"}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 2 */}

            {/* Section 3 */}
            <div className="section3">
                <div className="container">
                    <div className="section3__wrap">
                        <div className="section3__content">
                            <div className="section3__desc">APP Download</div>
                            <div className="section3__title">You can control direct from your mobile.</div>
                        </div>
                        <div className="section3__image">
                            <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/467307170_1115710389904052_4166183506723136533_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a8hR1tgAkMgQ7kNvgHPRjQE&_nc_oc=Adjp8WoJhLSaeHKrH3H6tEQZgXtumAECy-_-rlCJ_b3hH9cDyOw3SnPBY2FWhtm6NJJU747_-cXCIF8yM98Da3dk&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=Ag9rIlYl1YAxpcJgSNfXTPO&oh=00_AYDtWS7vOOzyw2JLgO5oBQ-s6zX19zO86nIpecEWAzCwFA&oe=67AD1392" alt="anh-3" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 3 */}

            {/* Section 4 */}
            <div className="section4">
                <div className="container">
                    <div className="section4__wrap">
                        <div className="section4__title wow zoomInDown">Our Goal</div>
                        <div className="section4__desc">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. <FaRegHandLizard />
                        </div>
                        <div className="section4__list">
                            <div className="section4__keyword wow bounceIn" data-wow-delay="1s">
                                <FaRegHandshake />
                                <span>cooperative</span>
                            </div>
                            <div className="section4__keyword wow bounceIn" data-wow-delay="1s">
                                <FaCrosshairs />
                                <span>Usage</span>
                            </div>
                            <div className="section4__keyword wow bounceIn" data-wow-delay="1s">
                                <FaRoute />
                                <span>rapid</span>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
            {/* End Section 4 */}

            {/* Section 5 */}
            <div className="section5">
                <div className="container">
                    <h2>Core Features</h2>
                    <div className="section5__wrap">
                        <div className="section5__box">
                            <div className="section5__image">
                                <img src="https://kenh14cdn.com/thumb_w/660/2020/6/13/1-1592023373570180003821.jpg" alt="anh-5"/>
                            </div>
                            <div className="section5__content">
                                <div className="section5__sub-title">Software, Interface</div>
                                <div className="section5__title">Software, Interface</div>
                            </div>
                        </div>
                        <div className="section5__box">
                            <div className="section5__image">
                                <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/416296011_916116103196816_3802186807996102221_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Oepr_vvOUN8Q7kNvgFd2Zg0&_nc_oc=AdimVQeft9xaGqXv0XJGt8cNmtZv-npUJYbAwxM0RN4QQ10DA7ECESwVJ8sfoAs8VrfkngSQCNQG9rxbVXUSxCd7&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AIaGGRjUU45Z74QSPILAvYH&oh=00_AYBdiWYSXJlCRCMpU7lzunOyaCrhlFL5uPAZrxOABF3dTQ&oe=67AD0BE5" alt="anh-5"/>
                            </div>
                            <div className="section5__content">
                                <div className="section5__sub-title">Software, Interface</div>
                                <div className="section5__title">Software, Interface</div>
                            </div>
                        </div>
                        <div className="section5__box">
                            <div className="section5__image">
                                <img src="https://kenh14cdn.com/thumb_w/660/2020/6/13/2-1592023373572511525278.jpg" alt="anh-5"/>
                            </div>
                            <div className="section5__content">
                                <div className="section5__sub-title">Software, Interface</div>
                                <div className="section5__title">Software, Interface</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 5 */}

            {/* Section 6 */}
            <div className="section6">
                <div className="container">
                    <div className="section6__wrap">
                        <img src='https://mixigaming.com/wp-content/uploads/2023/04/maxresdefault-5-324x235.jpg'  alt="anh-6"/>
                        <div className="section6__desc wow bounceInLeft" data-wow-delay="2s">"Peace does not mean one where no noise, no trouble, and no toil. When we are in a storm, we still feel the calm of mind. That is the real meaning of peace!"</div>
                    </div>
                </div>
            </div>
            {/* End Section 6 */}
        </>
    )
}

export default Home;