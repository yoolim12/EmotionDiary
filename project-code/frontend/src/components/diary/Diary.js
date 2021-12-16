// 일기 보여주는 페이지

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Diary.scss";



const Diary = () => {
    var navigate = useNavigate();
    let location = useLocation();
    const params = new URLSearchParams(location.search);
    let date = params.get('writtenDate');
    console.log("date:", date);
    // const path = `http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary/${date}`;
    // const diary = axios.get(path);
    const [fulldata, setFulldata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                setError(null);
                setFulldata(null);
                setLoading(true);
                const response = await axios.get(
                    `/diary/${date}`,
                );
                console.log(response)

                setYear(date.split('-')[0])
                setMonth(date.split('-')[1])
                setDay(date.split('-')[2])

                setFulldata(response.data);
                // console.log("fulldata title", fulldata.title)
                // console.log("fulldata title", fulldata.content)
            } catch (e) {
                setError(e);
            }
            setLoading(false);


        };
        fetchData();
    }, [date]);

    const handleModify = () => {
        const diaryData = {
            title: fulldata.title,
            content: fulldata.content,
            date: date
        }
        axios.patch(`/diary`, diaryData).then((res) => {
            console.log(res)
        })
        navigate(`/diary-write?selectedDate=${date}`




        );

    }

    const handleDelete = () => {
        axios.delete(`/diary/${date}`);
        alert('삭제가 완료되었습니다.')
        navigate(`/calendar`);
    }


    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러 발생</div>;

    return (
        <div className="Diary-container">
            <h4><p id='date'>{year}년 {month}월 {day}일</p></h4>
            <h2>{fulldata && <p id='diarytitle'>{fulldata.title}</p>}</h2>
            <h4>{fulldata && <p id='diarycontent'>{fulldata.content}</p>}</h4>
            <button className='button' onClick={handleModify}>수정</button>
            <button className='button' onClick={handleDelete}>삭제</button>
        </div>
    );
}

export default Diary;
