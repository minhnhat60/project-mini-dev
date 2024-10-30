import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

const ButtonCall = () => {
    return (
        <>
            <Link to="tel: 123-456-7899" className="button__call">
            <FaPhoneVolume />
            </Link>
        </>
    )
}

export default ButtonCall;