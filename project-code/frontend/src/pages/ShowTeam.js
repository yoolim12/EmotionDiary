import TeamLeft from "../components/Teampage/TeamLeft";
import TeamRight from "../components/Teampage/TeamRight";
import Book from "../components/Book/Book";

const ShowTeam = () => {
    return (
        <>
            <Book left={<TeamLeft />} right={<TeamRight/>} />
        </>
    );
}

export default ShowTeam;