import "./ServicesCompany.css";

const ServicesCompany = () => {
    return (
        <>
            {/* Section 1 */}
            <div className="section1__services">
                <div className="container">
                    <div className="section1__services__wrap">
                        <div className="section1__services__content">
                            <div className="section1__services__title">Về chúng tôi</div>
                            <div className="section1__services__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        </div>
                        <div className="section1__services__image">
                            <img src="https://gamek.mediacdn.vn/zoom/600_315/133514250583805952/2023/5/17/avatar1684308183881-16843081842051920563911.png" alt="anh-1" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 1 */}
        </>
    )
}

export default ServicesCompany;