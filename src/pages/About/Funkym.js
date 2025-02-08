import "./AboutArtists.css";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonGoBack from "../../components/ButtonGoBack";
import { useEffect } from "react";

const Funkym = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            {/* Information */}
            <div className="info">
                <div className="container-3">
                    <div className="info__wrap">
                        <div className="info__image">
                            <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/293271503_566510254841655_6490689403880866583_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DLc-tcCNZwEQ7kNvgGuankO&_nc_oc=AdgJBIq4wfrOUJvBwyk8QHsRZA4l6RVIgAxNB6gM5BqJxWg3exUa0U-MLD8H4tKoK31BVo5fMw3CXaY56X1LWxR7&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=A0QjmJgOsUfC1kxCNxA9K8e&oh=00_AYBoQUqoiRG73WF1x2ttZhRFfhN0rCtyeOFPDMumBv6hGg&oe=67AD16D5" alt="funkym" />
                        </div>
                        <div className="info__content">
                            <div className="info__career">Streamer</div>
                            <div className="info__nickname">Funky M</div>
                            <div className="info__social">
                                <Link to=""><FaYoutube /></Link>
                                <Link to=""><FaFacebookSquare /></Link>
                                <Link to=""><FaInstagram /></Link>
                            </div>
                            <h2>
                                <strong>
                                    About 
                                    Funkym
                                </strong>
                            </h2>
                            <p>
                                D.O.B
                                08.04
                            </p>
                            <div className="info__desc">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </div>
                        </div>
                    </div>
                    <ButtonGoBack />
                </div>
            </div>
            {/* End Information */}

        </>
    )
}

export default Funkym;