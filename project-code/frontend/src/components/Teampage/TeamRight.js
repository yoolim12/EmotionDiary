import React from 'react';
import './Team.scss';

const TeamRight = () => {
    return (
        <>
            <div className="fullpage">

                <div className="intro">
                    <h2>꽃무리</h2>

                </div>


                <div className="Team">

                    <div class="container">
                    
                        <img class="fit-picture" src={"./img/img3.jpg"} />
                        <div class="textbox">
                            <div class="text">박강혜<p></p>
                            e-mail<p></p>
                            kassia3160@gmail.com</div>
                            
                            
                        </div>
                    </div>


                    <div class="container">
                        <img class="fit-picture" src={"./img/img4.jpg"} />
                        <div class="textbox">
                        <div class="text">최유림<p></p>
                            e-mail<p></p>
                            email.com </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default TeamRight;