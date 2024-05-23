import React, { useState } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import styled from 'styled-components'

const IntroduceContainer = styled.div`
    padding-bottom: 150px;
`;

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

// 탭 타이틀
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
// CEO
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

    & .ceo_message {
        display: grid;
        grid-template-columns: 1fr 1fr;
        & .ceol {
            & > p {
                font-size: 14px;
                line-height: 180%;
                color: #777;
                margin-bottom: 15px;
            }
        }
        & .ceor {
            & > p {
                font-size: 14px;
                line-height: 180%;
                color: #777;
                margin-bottom: 15px;
                & > .black {
                    color: #333;
                }
            }
            & .sign {
                text-align: right;
                font-size: 16px;
                color: #333;
                & img {
                    margin-left: 20px;
                    vertical-align: bottom;
                }
            }
        }
    }

`;

// COMPANY

const IntroduceConpany = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    & .num_title {
        font-size: 23px;
        color: #000;
        font-weight: 300;
        margin-bottom: 30px;
        & .num {
            display: inline-block;
            text-align: center;
            vertical-align: top;
            margin-top: 5px;
            margin-right: 5px;
            width: 29px;
            height: 29px;
            line-height: 29px;
            background: #c40f39;
            font-family: 'Montserrat', sans-serif;
            font-size: 17px;
            color: #fff;
        }
    }
    & .subsidiary {
        
        &::after {
            content: '';
            display: block;
            clear: both;
        }
        & .sub1 {
            float: left;
            margin-bottom: 18px;
        }
        & .sub2 {
            float: right;
            margin-bottom: 18px;
        }
        & .sub3 {
            float: left;
        }
        & .sub4 {
            float: right;
        }
    }
    
`;

const Introduce = () => {

    const CeoArea = () => {

        const [activeTab2, setActiveTab2] = useState('company');

        const handleTabClick2 = (tab) => {
            setActiveTab2(tab);
        }

        const renderContent = () => {
            switch(activeTab2) {
                case 'ceo' :
                    return(
                        <>
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
                                <div className='ceo_message'>
                                    <div className='ceol'>
                                        <p>
                                            안녕하십니까? (주)모나미 대표이사 송하경입니다.<br />
                                            언제나 한결같이 모나미에 애정과 관심을 보여주시는 고객 및 주주 여러분들께 깊은 감사를 드립니다.
                                        </p>
                                        <p>
                                            1960년 창립된 광신화학공업사에서 출발한 모나미의 역사가 어느덧 반백년이 넘었습니다.<br />
                                            지금의 모나미를 있게한 ‘모나미 153’볼펜은 지난 50여 년간 꾸준한 사랑을 받으며<br />
                                            모나미를 필기구의 대명사이자 국민 브랜드로 성장시켰습니다.<br />
                                            이처럼 많은 분들의 사랑에 힘입어 문구 업계의 혁신을 주도할 수 있었으며,<br />
                                            사인펜, 프러스펜, 네임펜, 보드 마카 등 수 많은 히트작들을 선보일 수 있었습니다.
                                        </p>
                                        <p>
                                            필기구를 넘어 종합문구 분야의 선도적인 기업으로 건실한 성장을 이뤄온 모나미는 국내시장 뿐 아니라<br />
                                            해외시장에서도 꾸준한 성장을 거둬 전세계 다양한 국가로 수출되고 있습니다.
                                        </p>
                                        <p>
                                            하지만 모나미는 지난 50여 년간의 성과에 만족하지 않고 새로운 출발에 나서려고 합니다.
                                        </p>
                                    </div>
                                    <div className='ceor'>
                                        <p>
                                            종합문구분야의 선두 자리를 넘어 문구와 유통을 아우르는 새로운 비즈니스 모델을 만들어 나가고 있습니다.<br />
                                            하루가 다르게 변하는 트렌드와 시대의 변화에 대처하기 위해서<br />
                                            모나미의 기업 문화 역시 새롭게 만들어 나가고 있습니다.<br />
                                            미래를 긍정적으로 바라보면서 준비하고, 항상 즐거운 변화를 추구하는 기업이 되겠습니다.<br />
                                            시장에 대해서는 항상 겸손하고, 고객에 대해서는 항상 함께하는 친구 같은 마음과 자세로 대할 것입니다.
                                        </p>
                                        <p>
                                            앞으로 모나미는<br />
                                            <span className='black'>'오래된 친구지만 항상 신선하고 놀라움으로 가득찬, 그리고 미래를 위해 쉼 없이 노력하는'</span>기업이 되고자<br />
                                            합니다. 모나미의 새로운 변화와 도전을 지켜봐 주시길 바라며,<br />
                                            앞으로도 변함없는 사랑과 격려를 부탁드립니다.			
                                        </p>
                                        <p>
                                            감사합니다.
                                        </p>
                                        <p className='sign'>
                                            (주)모나미 대표 
                                            <img src={`${process.env.PUBLIC_URL}img/introduce/message_sign.jpg`} alt='' />
                                        </p>
                                    </div>
                                </div>
                            </IntroduceWrap>
                        </>
                    )
                case 'company' :
                    return(
                        <>
                            <IntroduceTitle>
                                COMPANY <span>INFO</span>
                            </IntroduceTitle>
                            <IntroduceConpany>
                                <h2 className='num_title'>
                                    <span className='num'>01</span>
                                    계열사 소개
                                </h2>
                                <div className='subsidiary'>
                                    <div className='sub1'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img1.jpg`} alt='company_info2_img1' />
                                        <div></div>
                                    </div>
                                    <div className='sub2'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img2.jpg`} alt='company_info2_img2' />
                                        <div></div>
                                    </div>
                                    <div className='sub3'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img3.jpg`} alt='company_info2_img3' />
                                        <div></div>
                                    </div>
                                    <div className='sub4'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img4.jpg`} alt='company_info2_img4' />
                                        <div></div>
                                    </div>
                                </div>
                            </IntroduceConpany>
                        </>
                    )
                default :
                    return(<></>)
            }
        }


        const MonamiIntroduce = () => {
            return(
                <IntroduceContainer>
                    <IntroduceTop>
                        <img src={`${process.env.PUBLIC_URL}img/introduce/page_visual1.jpg`} alt='page_visual1' />
                        <div className='banner'>
                            <h2>모나미 소개</h2>
                            <p>언제 어디서나 모나미는 당신 곁에 있습니다.</p>
                        </div>
                    </IntroduceTop>
                    <IntroduceTab>
                            <ul>
                                <li onClick={()=>{handleTabClick2('ceo')}} className={activeTab2 === 'ceo' ? 'zmfflr' : ''}>
                                    CEO 메세지
                                </li>
                                <li onClick={()=>{handleTabClick2('company')}} className={activeTab2 === 'company' ? 'zmfflr' : ''}>
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
                    {renderContent()}
                </IntroduceContainer>
            )
        }
        

        return(
            <>
                <Header />
                <MonamiIntroduce />
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