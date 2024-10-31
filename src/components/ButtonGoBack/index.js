import { useNavigate } from "react-router-dom";

const ButtonGoBack = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    
    return (
        <>
            <button onClick={handleGoBack} className="button">Trở lại</button>
        </>
    )
}

export default ButtonGoBack;