import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FlowerList.scss";
import { connect } from 'react-redux';

const FlowerList = ({Login}) => {
    const [count, setCount] = useState(0);
    const [emotion, setEmotion] = useState("");
    const getFlower = async () => {
        try{const response = await axios.get('/flower')
        setCount(response.data.count);
        setEmotion(response.data.emotion);
        } catch {

        }
    }
    useEffect(() => {
        if(Login.login.is_login){
            getFlower();
        }
    }, []);
   
    return( 
        <div id='flower-container'>
            <img id='background' 
                src={`images/background.png`}>
            </img>
            {
                emotion ?             
                <img id='flower' src={`images/${
                    count < 6 ? "새싹/" : 
                    count < 14 ? "중간싹/" : 
                    count < 22 ? "꽃봉오리/" : "꽃/" 
                }${emotion}.png`}></img> 
            : <img id='flower' src={`images/씨앗.png`} />
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {Login:state};
}
export default connect(mapStateToProps)(FlowerList);
