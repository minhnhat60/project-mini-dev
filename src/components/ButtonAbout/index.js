import { Link } from "react-router-dom";

const ButtonAbout = (props) => {
    const { text } = props;
    return (
        <>
            <Link to="/about" className="button button-outline-highlight">{text}</Link>
        </>
    )
}

export default ButtonAbout;