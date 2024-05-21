import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import styled from 'styled-components'

const IntroduceTop = styled.div`
    max-width: 1920px;
    height: 342px;
    margin: 0 auto;
    position: relative;
    & > .banner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        text-align: center;
        & h2 {
            font-size: 32px;
            color: #fff;
            font-weight: 500;
            &::after {
                content: '';
                width: 30px;
                height: 4px;
                background: #c40f39;
                display: block;
                margin: 5px auto 10px;
            }
        }
        & p {   
            font-size: 15px;
            color: #fff;
            font-weight: 300;
        }
    }
`;

const IntroduceTab = styled.div`
    max-width: 1400px;
    margin: -29px auto 85px;
    position: relative;
    z-index: 2;
    & ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        border: 1px solid rgba(0,0,0,0.1);
        & li {
            height: 58px;
            line-height: 58px;
            text-align: center;
            background: #fff;
            color: #666;
            border-right: 1px solid #ddd;
            font-size: 15px;
            font-family: "Noto Sans KR", sans-serif;
            cursor: pointer;
        }
    }
    .zmfflr {
        background: #c40f39;
        color: #fff;
    }
`;

const IntroduceTitle = styled.div`
    font-size: 38px;
    font-weight: 600;
    color: #000;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;
    & span {
        color: #c40f39;
    }
    &::after {
        content: '';
        width: 30px;
        height: 4px;
        display: block;
        background: #c40f39;
        margin: 5px auto 95px;
    }
`;

const IntroduceWrap = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    & .pht_area {
        margin-bottom: 50px;
        & .pht {
            img {
                position: relative;
                z-index: 10;
            }
        }
        & .bgbox {
            width: 150px;
            height: 150px;
            position: absolute;
            left: -5px;
            top: -5px;
            z-index: 5;
            background: #c40f39;
        }
        & .slg {
            width: 662px;
            height: 293px;
            position: absolute;
            right: 0;
            top: 58px;
            z-index: 10;
            background: rgba(227,227,227,1);
            & .textarea {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 11;
                padding: 90px 0 0 162px;
                font-size: 36px;
                color: #000;
                font-weight: 300;
                line-height: 140%;
                & span {
                    color: #c40f39;
                    font-weight: 400;
                }
            }
        }
    }

`;

const Introduce = () => {

    const CeoArea = () => {

        const Ceo = () => {
            return(
                <>
                    <IntroduceTop>
                        <img src={`${process.env.PUBLIC_URL}img/introduce/page_visual1.jpg`} alt='page_visual1' />
                        <div className='banner'>
                            <h2>모나미 소개</h2>
                            <p>언제 어디서나 모나미는 당신 곁에 있습니다.</p>
                        </div>
                    </IntroduceTop>
                    <IntroduceTab>
                            <ul>
                                <li className='zmfflr'>
                                    CEO 메세지
                                </li>
                                <li>
                                    회사정보
                                </li>
                                <li>
                                    회사연혁
                                </li>
                                <li>
                                    윤리강령
                                </li>
                                <li>
                                    투자정보
                                </li>
                                <li>
                                    CI
                                </li>
                                <li>
                                    채용정보
                                </li>
                                <li>
                                    찾아오시는 길
                                </li>
                                <li>
                                    안전보건 경영방침
                                </li>
                            </ul>
                    </IntroduceTab>
                    <IntroduceTitle>
                        CEO <span>MESSAGE</span>
                    </IntroduceTitle>
                    <IntroduceWrap>
                        <div className='pht_area'>
                            <div className='pht'>
                                <img src={`${process.env.PUBLIC_URL}img/introduce/message_ceo.jpg`} alt='message_ceo' />
                                <div className='bgbox'></div>
                            </div>
                            <div className='slg'>
                                <img src={`${process.env.PUBLIC_URL}img/introduce/message_slg_bg.png`} alt='message_slg_bg' />
                                <div className='textarea'>
                                    항상 당신 곁의<br />
                                    <span>소중한 친구</span>로 남겠습니다.
                                </div>
                            </div>
                        </div>
                    </IntroduceWrap>
                </>
            )
        }

        return(
            <>
                <Header />
                <Ceo />
                <Footer />
            </>
        )
    }

    return (
        <>
            <CeoArea />
        </>
    )
}

export default Introduce