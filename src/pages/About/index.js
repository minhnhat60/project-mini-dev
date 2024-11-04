import "./section.css";
import { Link } from "react-router-dom";
import logo from "../../layouts/images/logo-refund.png";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <>
            {/* Logo */}
            <div className="logo-ss">
                <div className="container">
                    <img src={logo} alt="Logo" />
                </div>
            </div>

            {/* End Logo */}

            {/* Section 1 */}
            <div className="section1__about">
                <div className="container">
                    <div className="section1__about__image">
                        <img src="https://kenh14cdn.com/203336854389633024/2022/11/10/photo-2-16680547888521522078253.jpg" alt="anh-1"/>
                        <div className="section1__about__desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
                    </div>
                </div>
            </div>
            {/* End Section 1 */}

            {/* Section 2 */}
            <div className="section2__about">
                <div className="container-2">
                    <h2>Thành viên</h2>
                    <div className="section2__about__wrap">
                        <div className="section2__about__list">
                            <div className="section2__about__item wow flip" data-wow-duration="1s">
                                <div className="section2__about__image">
                                    <Link to="/about/QNT">
                                        <img src="https://kenh14cdn.com/203336854389633024/2021/3/28/photo-1-1616888000513548991779.jpg" alt="qnt" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">QNT</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="1.5s">
                                <div className="section2__about__image">
                                    <Link to="/about/Djchip">
                                        <img src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/1/18/5-16109300277531061844160.jpg" alt="djchip" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">DJ Chip</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="2s">
                                <div className="section2__about__image">
                                    <Link to="/about/Domixi">
                                        <img src="https://kenh14cdn.com/203336854389633024/2021/7/15/photo-2-1626355446028625562467.jpg" alt="domixi" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Độ Mixi</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="2.5s">
                                <div className="section2__about__image">
                                    <Link to="/about/Boongminz">                                   
                                        <img src="https://kenh14cdn.com/203336854389633024/2020/11/25/photo-1-16062624259911890631092.jpg" alt="boongminz" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Boongminz</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="3s">
                                <div className="section2__about__image">
                                    <Link to="/about/Snake">
                                        <img src="https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2022/01/13/90_c7f95ced6bb6712f970ae4a5eab2dca9.jpg" alt="Snake" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Snake</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="3.5s">
                                <div className="section2__about__image">
                                    <Link to="/about/Rambo">
                                        <img src="https://kenh14cdn.com/203336854389633024/2020/11/25/photo-1-16062622909512125632764.jpg" alt="rambo" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Rambo</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="4s">
                                <div className="section2__about__image">
                                    <Link to="/about/Mimosa">
                                        <img src="https://gamek.mediacdn.vn/133514250583805952/2024/10/12/photo-1728718005617-17287180064211366126189.png" alt="mimosa" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Mimosa</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="4.5s">
                                <div className="section2__about__image">
                                    <Link to="/about/Funkym">                                   
                                        <img src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/189265002_1138880943263532_3727257176918407072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-uiNZ19QBUQQ7kNvgGmf6Ok&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AfN-y4-wf_vuDl6VY1CvVf1&oh=00_AYAFP3pO_bWYI2e1nVb1asjK7FTX4fIR-ajx-8J3eGHHcw&oe=67499B70" alt="funkym" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Funky M</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="5s">
                                <div className="section2__about__image">
                                    <Link to="/about/Nhism">
                                        <img src="https://kenh14cdn.com/203336854389633024/2020/11/25/photo-1-16062623565552052856333.jpg" alt="nhism" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Nhism</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 2 */}
        </>
    )
}

export default About;