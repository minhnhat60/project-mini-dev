import "./ServicesCompany.css";
import { FaAcquisitionsIncorporated, FaMicrophone, FaTeamspeak } from "react-icons/fa";
import { GiArchBridge, GiDuality, GiFlowerStar, GiUprising } from "react-icons/gi";
import picture3 from "./images/pic-services.jpg";
import { useEffect } from "react";
import Swal from 'sweetalert2';


const ServicesCompany = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleFocus = (event) => {
        event.preventDefault();
        event.target.style.backgroundColor = `aliceblue`;
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');

        console.log(event);
    }
    const handleBlur = (event) => {
        event.preventDefault();
        event.target.style.backgroundColor = "White";
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1');
        console.log(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const objectRegister = {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            phone: event.target.elements.phone.value,
            address: event.target.elements.address.value,
            description: event.target.elements.description.value,
        }

        if(objectRegister) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                width: 400,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Chúng tôi sẽ phản hồi sớm"
              });
        }
    }


    return (
        <>
            {/* Section 1 */}
            <div className="section1__services">
                <div className="container">
                    <div className="section1__services__wrap">
                        <div className="section1__services__content">
                            <div className="section1__services__title">More About Us</div>
                            <div className="section1__services__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance.
                            </div>
                        </div>
                        <div className="section1__services__image">
                            <img src="https://gamek.mediacdn.vn/zoom/600_315/133514250583805952/2023/5/17/avatar1684308183881-16843081842051920563911.png" alt="anh-1" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 1 */}

            {/* Section 2 */}
            <div className="section2__services">
                <div className="container">
                    <div className="section2__services__sub-title">Tư vấn dịch vụ</div>
                    <div className="section2__services__title">DỊCH VỤ CỦA CHÚNG TÔI</div>
                    <div className="section2__services__list">
                        <div className="section2__services__wrap">
                            <div className="section2__services__item wow bounceInUp">
                                <FaTeamspeak className="section2__services__icon"/>
                                <div className="section2__services__info">
                                    <span className="section2__services__name">live stream</span>
                                    <span className="section2__services__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                                </div>
                            </div>
                            <div className="section2__services__item wow bounceInUp">
                                <GiDuality className="section2__services__icon" />
                                <div className="section2__services__info">
                                    <span className="section2__services__name">dual ranking</span>
                                    <span className="section2__services__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                                </div>
                            </div>
                            <div className="section2__services__item wow bounceInUp">
                                <GiUprising className="section2__services__icon" />
                                <div className="section2__services__info">
                                    <span className="section2__services__name">flexible ranking</span>
                                    <span className="section2__services__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                                </div>
                            </div>
                            <div className="section2__services__item wow bounceInUp">
                                <FaAcquisitionsIncorporated className="section2__services__icon" />
                                <div className="section2__services__info">
                                    <span className="section2__services__name">tft</span>
                                    <span className="section2__services__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                                </div>
                            </div>
                            <div className="section2__services__item wow bounceInUp">
                                <GiArchBridge className="section2__services__icon" />
                                <div className="section2__services__info">
                                    <span className="section2__services__name">aram</span>
                                    <span className="section2__services__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                                </div>
                            </div>
                            <div className="section2__services__item wow bounceInUp">
                                <FaMicrophone className="section2__services__icon" />
                                <div className="section2__services__info">
                                    <span className="section2__services__name">sing</span>
                                    <span className="section2__services__desc">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 2 */}

            {/* Section 3 */}
            <div className="section3__services">
                <div className="section3__services__wrap">
                    <div className="section3__services__content">
                        <div className="section3__services__register">
                            <div className="section3__services__title"><GiFlowerStar />
                            <span>ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</span></div>
                            <hr />
                            <form className="section3__services__form" onSubmit={handleSubmit}>
                                <input onFocus={handleFocus} onBlur={handleBlur} type="text" name="name" placeholder="Nhập tên..." required></input>
                                <input onFocus={handleFocus} onBlur={handleBlur} type="email" name="email" placeholder="Email"></input>
                                
                                <input onFocus={handleFocus} onBlur={handleBlur} type="number" name="phone" placeholder="Số điện thoại"></input>
                                <input onFocus={handleFocus} onBlur={handleBlur} name="address" placeholder="Địa chỉ"></input>
                                
                                <textarea onFocus={handleFocus} onBlur={handleBlur} name="description" rows={5} placeholder="Nội dung ngắn gọn"></textarea>

                                <button className="button button__services" type="submit">Tư vấn</button>
                            </form>
                        </div>
                    </div>
                    <div className="section3__services__image">
                        <img src={picture3} alt="anh-3" />
                    </div>
                </div>
            </div>
            {/* End Section 3 */}
        </>
    )
}

export default ServicesCompany;