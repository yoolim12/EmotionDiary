import React from 'react';
import './Team.scss';
//scrolling page


const TeamLeft = () => {
    return (
        <>
            <div className="fullpage">

                <div className="intro">
                    <h2 >감정으로 식물을 성장 시키는 일기</h2>
                </div>


                <div className="Team">
                    <div class="container">
                        <img class="fit-picture" src={"./img/img1.jpg"} />
                        <div class="textbox">
                        <div class="text">나영민<p></p>
                            e-mail<p></p>
                            youmn327@gmail.com </div>
                        </div>
                    </div>

                    <div class="container">
                        <img class="fit-picture" src={"./img/img2.jpg"} />
                        <div class="textbox">
                        <div class="text">문지윤<p></p>
                        e-mail<p></p>
                        ske0830@gmail.com </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default TeamLeft;