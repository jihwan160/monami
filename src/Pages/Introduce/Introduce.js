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