import "./section.css";
import { Link } from "react-router-dom";
import logo from "../../layouts/images/logo-refund.png";

const About = () => {
    
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
                        <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/358715384_758302066301621_35452118781359205_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=c7wJd6Y5XWcQ7kNvgGPqBbd&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AhOmU6lygPNNHCk7xBhUqKq&oh=00_AYDdVBlGMiAgqQ2PS3GgUGW30dtoijF-UEtLTdg1cJ8wfg&oe=6727E20B" alt="anh-1"/>
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
                                    <Link>
                                        <img src="https://kenh14cdn.com/203336854389633024/2021/3/28/photo-1-1616888000513548991779.jpg" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">QNT</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="1.5s">
                                <div className="section2__about__image">
                                    <Link>
                                        <img src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/1/18/5-16109300277531061844160.jpg" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">DJ Chip</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="2s">
                                <div className="section2__about__image">
                                    <Link>
                                        <img src="https://kenh14cdn.com/203336854389633024/2021/7/15/photo-2-1626355446028625562467.jpg" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Độ Mixi</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="2.5s">
                                <div className="section2__about__image">
                                    <Link>                                   
                                        <img src="https://kenh14cdn.com/203336854389633024/2020/11/25/photo-1-16062624259911890631092.jpg" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Boongminz</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="3s">
                                <div className="section2__about__image">
                                    <Link>
                                        <img src="https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2022/01/13/90_c7f95ced6bb6712f970ae4a5eab2dca9.jpg" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Snake</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="3.5s">
                                <div className="section2__about__image">
                                    <Link>
                                        <img src="https://kenh14cdn.com/203336854389633024/2020/11/25/photo-1-16062622909512125632764.jpg" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Rambo</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="4s">
                                <div className="section2__about__image">
                                    <Link>
                                        <img src="https://gamek.mediacdn.vn/133514250583805952/2024/10/12/photo-1728718005617-17287180064211366126189.png" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Mimosa</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="4.5s">
                                <div className="section2__about__image">
                                    <Link>                                   
                                        <img src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/189265002_1138880943263532_3727257176918407072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-uiNZ19QBUQQ7kNvgGmf6Ok&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AfN-y4-wf_vuDl6VY1CvVf1&oh=00_AYAFP3pO_bWYI2e1nVb1asjK7FTX4fIR-ajx-8J3eGHHcw&oe=67499B70" alt="anh-1" />
                                    </Link>
                                </div>
                                <div className="section2__about__name">Funky M</div>
                            </div>
                            <div className="section2__about__item wow flip" data-wow-duration="5s">
                                <div className="section2__about__image">
                                    <Link>
                                        <img src="https://kenh14cdn.com/203336854389633024/2020/11/25/photo-1-16062623565552052856333.jpg" alt="anh-1" />
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