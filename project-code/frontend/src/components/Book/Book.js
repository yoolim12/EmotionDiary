import "./Book.scss";
import NavigationBar from "../navBar/NavigationBar";
import { logoutDB } from "../../login/LoginValidation";
import { useNavigate } from 'react-router';

const Book = props => {
    const navigate = useNavigate();
    return (
        <>
            <div className="background">
                <div className="book">
                    <div className="bookmark"><NavigationBar /></div>

                    <div className="leftpage">{props.left}</div>
                    <div className="rightpage">{props.right}</div>
                </div>
            </div>

        </>
    );
}

export default Book;