import ButtonAbout from "../../components/ButtonAbout";
import ButtonServices from "../../components/ButtonServices";
import "./section.css";
import { FaBalanceScale, FaFire, FaIcons } from "react-icons/fa";

const Home = () => {
    return (
        <>
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
        </>
    )
}

export default Home;