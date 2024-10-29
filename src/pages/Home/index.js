import ButtonAbout from "../../components/ButtonAbout";
import ButtonServices from "../../components/ButtonServices";
import "./section.css";
import { FaBalanceScale, FaCrosshairs, FaFire, FaIcons, FaRegHandLizard, FaRegHandshake, FaRoute } from "react-icons/fa";

const Home = () => {
    return (
        <>
            {/* Section 1 */}
            <div className="section1">
                <div className="container">
                    <div className="section1__wrap">
                        <div className="section1__sub-title">Developer Company</div>
                        <div className="section1__title">Spacespeakers</div>
                        <div className="section1__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda aperiam.</div>
                        <div className="section1__button">
                            <ButtonServices />
                            <ButtonAbout text={"Learn More"}/>
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
                            <img src="https://cdn.dribbble.com/userupload/17156373/file/original-43ea200769741e48f6840cd3e20e4448.jpg?resize=752x1064" alt="anh-2"/> 
                        </div>
                        <div className="section2__content">
                            <h2 className="section2__sub-title">Core Features</h2>
                            <div className="section2__title">Best Business <br />
                            Software Solution</div>
                            <div className="section2__list">
                                <div className="section2__item">
                                    <FaFire className="section2__icon" />
                                    <span>faith</span>
                                </div>
                                <div className="section2__item">
                                    <FaIcons className="section2__icon"/>
                                    <span>symphony</span>
                                </div>
                                <div className="section2__item">
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
                            <img src="https://mensfolio.vn/wp-content/uploads/2022/07/4.jpg" alt="anh-3" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 3 */}

            {/* Section 4 */}
            <div className="section4">
                <div className="container">
                    <div className="section4__wrap">
                        <div className="section4__title">Our Goal</div>
                        <div className="section4__desc">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. <FaRegHandLizard />
                        </div>
                        <div className="section4__list">
                            <div className="section4__keyword">
                                <FaRegHandshake />
                                <span>cooperative</span>
                            </div>
                            <div className="section4__keyword">
                                <FaCrosshairs />
                                <span>Usage</span>
                            </div>
                            <div className="section4__keyword">
                                <FaRoute />
                                <span>rapid</span>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
            {/* End Section 4 */}
        </>
    )
}

export default Home;