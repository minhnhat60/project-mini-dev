import ButtonAbout from "../../components/ButtonAbout";
import ButtonServices from "../../components/ButtonServices";
import "./section.css";

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


        </>
    )
}

export default Home;