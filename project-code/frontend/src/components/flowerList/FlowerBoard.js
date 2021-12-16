import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import "./FlowerBoard.scss";

const FlowerBoard = ({Login}) => {
    var now = new Date();
    var this_year = now.getFullYear();
    const [flowerList, setFlowerList] = useState([]);
    const [year, setYear] = useState(this_year);

    const getFlowerList = async () => {
        await axios.get(`/flowers/${year}`)
            .then(({data}) => {
                setFlowerList(data);
            });
    }
    useEffect(() => {
        if(Login.login.is_login){
            getFlowerList();
        }
    }, []);

    const checkFlower = (count, emotion) => {
        let folder = ''
        if (count == 0) return `images/씨앗.png`
        if (count < 6) folder = `새싹`
        else if (count < 14) folder = '중간싹'
        else if (count < 22) folder = '꽃봉오리'
        else folder = '꽃'
        return `images/${folder}/${emotion}.png`
    }

    const flowerPotRendering = () => {
        const result = []
        for (let i = 0; i < 12; i++) {
            result.push(
                <div class="pot">
                    <img class="flowerpot" src={`images/화분.png`} />
                </div>
            )
        }
        if(flowerList){
            for (let i = 0; i < flowerList.length; i++) {
                const count = flowerList[i].count
                const emotion = flowerList[i].emotion
                const month = flowerList[i].month
                
                result[flowerList[i].month - 1] = 
                    <div class="pot">
                        <img class="flower" src={checkFlower(count, emotion)} />
                        <img class="flowerpot" src={`images/화분.png`} />
                    </div>

            }
        }

        return result
    }
    
    return( 
        <div className='flowewr-container'>
            {/* <img className='board' src={`images/board.png`} /> */}
            <div className='pot-container'>
                {flowerPotRendering()}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {Login:state};
}
export default connect(mapStateToProps)(FlowerBoard);