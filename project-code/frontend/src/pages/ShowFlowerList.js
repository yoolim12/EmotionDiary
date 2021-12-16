import FlowerBoard from "../components/flowerList/FlowerBoard";
import Book from "../components/Book/Book";
import DoughnutChart from '../components/chart/DoughnutChart';
import LineChart from '../components/chart/LineChart';


const ShowFlowerList = () => {
    return (
        <>
            <Book left={<FlowerBoard />} right={<DoughnutChart />} />
        </>
    );
}

export default ShowFlowerList;