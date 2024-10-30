import { FaLongArrowAltUp } from "react-icons/fa";
import "./ButtonScrollToTop.css";
import { useEffect, useState } from "react";

const ButtonScrollToTop = () => {
    const [ showButton, setShowButton ] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          });
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <>
            <button 
                onClick={scrollToTop}
                style={{
                    display: showButton ? 'block' : 'none',
                }}
                className="button-scroll-up">
                    <FaLongArrowAltUp />
            </button>
        </>
    )
}

export default ButtonScrollToTop;