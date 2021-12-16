import FlowerList from "../components/flowerList/FlowerList";
import Book from "../components/Book/Book";
import LoginForm from "../login/loginForm";

const ShowLoginPage = () => {
    return (
        <>
            <Book left={<LoginForm />} right={<FlowerList />} />
        </>
    );
}

export default ShowLoginPage;