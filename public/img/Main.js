import React from 'react'
import styled from 'styled-components'


const VisualImg = styled.div`
    width: 100%;
    height: 652px;
    background-image: url('./../../img/visual1.jpg');
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    & > div {
        position: absolute;
        left: 20%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
    }
    & > div>h1::before {
        display: block;
        content: '';
        width: 80px;
        height: 1px;
        background: #fff;
        margin-bottom: 10px;
    }
    & > div>h1 {
        font-size: 50px;
        color: #fff;
        font-weight: 200;
        font-family: "Noto Sans KR", sans-serif;
        line-height: 120%;
    }
    & > div>p {
        font-size: 16px;
        color: rgba(255,255,255,0.8);
        margin-top: 30px;
        font-weight: 300;
        font-family: "Noto Sans KR", sans-serif;
        line-height: 140%;
    }
`;

const New = styled.div`
    padding-top: 75px;
`;

const NewCover = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const NewCoverTop = styled.div`
    margin: 13px 0 22px 0;
    display: flex;
    justify-content: space-between;
`;
const NewCoverTopLeft = styled.div`

    & > h2 {
        height: 90px;
        font-size: 32px;
        font-weight: 600;
        color: #000;
        letter-spacing: 2px;
        line-height: 120%;
        font-family: "Noto Sans KR", sans-serif;
    }
    & > h2::after {
        content: "";
        width: 26px;
        height: 4px;
        display: block;
        background: #c40f39;
        margin: 10px 0;
    }
    & > p {
        font-size: 13px;
        color: #6e6e6e;
        margin-top: 10px;
        margin-bottom: 36px;
    }
`;
const NewCoverTopRight = styled.div`
    
    & > img {
        
    }
`;

const NewCoverBot = styled.div`
    
`;

const Main = () => {

    const Visual = () => {
        return(
            <VisualImg>
                <div>
                    <h1>
                        어쩌면 삶은<br />
                        인생이라는 종이 위에<br />
                        써 내려가는<br />
                        펜의 기록 같습니다.<br />
                    </h1>
                    <p>
                        그중에서도 지우고 싶지 않은 기록이 있습니다.<br />
                        모나미는 언제나 당신의 행복한 기록과 함께 합니다.
                    </p>
                </div>
            </VisualImg>
        )
    }

    const NewArea = () => {
        return(
            <New>
                <NewCover>
                    <NewCoverTop>
                        <NewCoverTopLeft>   
                            <h2>
                                NEW<br />
                                ARRIVALS
                            </h2>
                            <p>가장 먼저 만나는 설레는 기다림</p>
                            <img src={`${process.env.PUBLIC_URL}img/new1.jpg`} alt='1'/>
                        </NewCoverTopLeft>
                        <NewCoverTopRight>
                            <img src={`${process.env.PUBLIC_URL}img/new2.jpg`} alt='2' />
                        </NewCoverTopRight>
                    </NewCoverTop>
                    <NewCoverBot>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}img/new3.jpg`} alt='3' />
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}img/new4.jpg`} alt='4' />
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}img/new5.jpg`} alt='5' />
                        </div>
                    </NewCoverBot>
                </NewCover>
            </New>
        )
    }



    return (
        <div>
            <Visual />
            <NewArea />
        </div>
    )
}

export default Main