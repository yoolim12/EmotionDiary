// 참고 : https://yeolceo.tistory.com/69
import {useEffect, useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Calendar.scss";

const CalendarPage =()=>{
  const navigate = useNavigate();
  const [calendar, setCalendar] = useState(false); 
  const [getMoment, setMoment]=useState(moment()); // moment() : 현재 날짜 값을 가져옵니다.
  const today = getMoment; // 현재 날짜

  // startOf() : 현재 시간 기준 해당 달이 시작한지 어느 정도 시간(며칠)이 지났는지(2021-01-01 은 1, 6주 뒤면 2월5일이 되므로 endof('month)는 6)
  const firstWeek = today.clone().startOf('month').week();
  
  // endOf() : 현재 시간 기준 해당 달이 끝날때까지 어느 정도 시간(며칠)이 남았는지
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  // lastWeek에서 쓰인 조건문을 보면 1년은 52주가 존재하고 며칠이 더 있는데 이 부분을 달력은 53주로써 표현해야 합니다!! 
  // 하지만 moment()는 내년의 첫 주인 1로 표시하기 때문에 마지막 주가 1이라면 53으로 표시합니다.(2월이 29일이 아닌 년도의 12월 마지막 주의 경우 1을 리턴)

  const [diaryEmo, setDiaryEmo] = useState([]);
  const [diaryDate, setDiaryDate] = useState([]);
  
  // 감정에 따른 색들
  const emoColor = {"행복": "#dfe100", "슬픔": "#668b85", "중립": "#99d41e", 
                    "놀람": "#f0bb62", "혐오": "#5d6856", "분노": "#ae5333", "공포": "#55567d"};
  
  const makeEmoList = async () => {
      const emolist = [];
      await axios.get(`/diaries`).then(({data}) => {
          for (let i = 0; i < data.length; i++) {
            emolist.push(data[i].emotion);
          }
      });
      console.log(emolist)
      return emolist;
  };

  const makeDateList = async () => {
        const datelist = []
        await axios.get(`/diaries`).then(({data}) => {
            for (let i = 0; i < data.length; i++) {
              datelist.push(data[i].date);
            }
        });
        console.log(datelist);
        return datelist;
    };

  useEffect(() => {
    const getEmo = async () => {
      const emolist = await makeEmoList();
      setDiaryEmo(emolist);
    }
    const getDate = async () => {
      const datelist = await makeDateList();
      setDiaryDate(datelist);
    }
    getEmo();
    getDate();
  }, [])

  // date 를 받아서 페이지 이동하는 함수
  const getDiary = (date) => {
    if (moment(date).isAfter(moment().format('YYYY-MM-DD'))) return;
    for (let i = 0; i < diaryDate.length; i++){
      console.log(diaryDate)
      if (date === diaryDate[i]) {
      navigate(`/diary?writtenDate=${date}`);
      return;
      }
    }
    navigate(`/diary-write?selectedDate=${date}`);
  }

  const calendarArr = ()=>{

    let result = [];

    for ( let week = firstWeek; week <= lastWeek; week++) {
      result = result.concat(
        <tr className="calendar" key={week}>
          {
            Array(7).fill(0).map((data,index) => {
              // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?

              let days = today.clone().startOf('year').week(week).startOf('week').add(index,'day');

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                    <td className="todayButton" key={index} >
                      <button className="todayButton" onClick={()=>getDiary(days.format('YYYY-MM-DD'))}
                      style={{backgroundColor : diaryDate.includes(days.format('YYYY-MM-DD')) ? 
                      emoColor[diaryEmo[diaryDate.indexOf(days.format('YYYY-MM-DD'))]] : "transparent" }}
                      >
                        <span>{days.format('D')}</span>
                      </button>
                    </td>
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                    <td className="nextMonthButton" key={index} >
                      <button className="nextMonthButton" onClick={()=>getDiary(days.format('YYYY-MM-DD'))}
                      >
                        <span>{days.format('D')}</span>
                      </button>
                    </td>
                );
              }else{
                return(
                    <td className="restButton" key={index}  >
                      <button className="restButton" onClick={()=>getDiary(days.format('YYYY-MM-DD'))}
                      style={{backgroundColor : diaryDate.includes(days.format('YYYY-MM-DD')) ? 
                      emoColor[diaryEmo[diaryDate.indexOf(days.format('YYYY-MM-DD'))]] : "transparent" }}
                      >
                        <span>{days.format('D')}</span>
                      </button>
                    </td>
                );
              }
            })
          }
        </tr>);
    }
    return result;
  }

  return(
    <div className="App">
        <div className="control">
          <button className="beforeMonth" 
          onClick={()=>setMoment(getMoment.clone().subtract(1,'month'))}>
            {'<'}
          </button>

          <span className="nowMonth">    {today.format('YYYY 년 MM 월')}    </span>

          <button className="afterMonth" 
          onClick={()=>{setMoment(getMoment.clone().add(1,'month'))}}>
            {'>'}
          </button>
        </div>
        <table className="calendar">
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
    </div>
  );
}
export default CalendarPage;