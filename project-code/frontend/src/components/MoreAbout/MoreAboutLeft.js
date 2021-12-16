import React from 'react';
import './MoreAbout.scss';

const MoreAboutLeft = () => {
  return (
    <div className="fullpage">
      <div className="text-container">
        <p className="title">꽃무리는?</p>

        <div>
          <p className="QuestionText">Q1 : 어떤 서비스 인가요? </p>
          <p className='AnswerText'>A1 : 씨앗에 물 대신 감정을 주어 하나의 꽃으로 피어나게 하는 감정일기장입니다.
            일기를 많이 쓸 수록 꽃이 자라나요!</p>
        </div>

        <div>
          <p className="QuestionText">Q2 : 꽃무리 페이지는 어떤 페이지 인가요?</p>
          <p className='AnswerText'>A2 : 꽃무리 페이지는 사용자의 꽃의 감정일기를 저장하는 페이지 입니다. 월별로 저장이 되어 사용자의 일기에 대한 감정차트를 확인 할 수 있습니다. </p>
        </div>

        <div>
          <p className="QuestionText">Q3 : 감정의 구성은 어떻게 되어 있나요?</p>
          <p className='AnswerText'>A3 : 감정은 공포, 놀람, 분노, 슬픔, 중립, 행복, 혐오로, 총 7가지로 구성되어 있습니다.</p>
        </div>

        <div>
          <p className="QuestionText">Q4 : 감정분석은 어떻게 진행되나요?</p>
          <p className='AnswerText'>A4 : 문장별로 측정된 감정 분포도를 합산하여 일기장의 주요 감정을 도출해냅니다. </p>
        </div>

      </div>
    </div>
  );
}

export default MoreAboutLeft;