import MoreAboutRight from "../components/MoreAbout/MoreAboutRight";
import MoreAboutLeft from "../components/MoreAbout/MoreAboutLeft";
import Book from "../components/Book/Book";

const ShowMoreAbout = () => {
    return (
        <>
            <Book left={<MoreAboutLeft />} right={<MoreAboutRight />} />
        </>
    );
}

export default ShowMoreAbout;