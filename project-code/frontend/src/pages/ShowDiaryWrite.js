import DiaryWritePage from "../components/diary/DiaryWritePage";
import FlowerList from "../components/flowerList/FlowerList";
import Book from "../components/Book/Book";

const ShowDiaryWrite = () => {
    return (
        <>
            <Book left={<DiaryWritePage />} right={<FlowerList />} />
        </>
    );
}

export default ShowDiaryWrite;