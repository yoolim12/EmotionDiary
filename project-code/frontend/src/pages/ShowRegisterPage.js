import FlowerList from "../components/flowerList/FlowerList";
import Book from "../components/Book/Book";
import Register from "../components/Register";

const ShowRegisterPage = () => {
    return (
        <>
            <Book left={<Register />} right={<FlowerList />} />
        </>
    );
}

export default ShowRegisterPage;