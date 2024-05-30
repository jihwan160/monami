import React, { useState } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import styled from 'styled-components'
import Top from '../Home/Top';
import { useLocation } from 'react-router-dom';

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

const IntroduceCompany = styled.div`
    
    & .info1 {
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
                margin-right: 10px;
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
                position: relative;
                float: left;
                margin-bottom: 18px;
            }
            & .sub2 {
                position: relative;
                float: right;
                margin-bottom: 18px;
            }
            & .sub3 {
                position: relative;
                float: left;
            }
            & .sub4 {
                position: relative;
                float: right;
            }

            & .titbox {
                position: absolute;
                left: 2%;
                bottom: 10px;
                /* transform: translateX(-50%); */
                z-index: 2;
                width: 86%;
                height: 118px;
                padding: 0 5%;
                background: rgba(255,255,255,0.9);
                text-align: center;
                font-size: 19px;
                color: #333;
                display: flex;
                align-items: center;
                & .sbj {
                    width: 45%;
                    font-size: 20px;
                    color: #333;
                    line-height: 130%;
                    text-align: left;
                    & > span {
                        color: #c40f39;
                        font-size: 19px;
                        font-weight: 500;
                    }
                }
                & .blogo {
                    width: 55%;
                    border: 1px solid #ddd;
                    background: #fff;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }

    & .info2 {
        max-width: 1400px;
        margin: 130px auto;
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
                margin-right: 10px;
                width: 29px;
                height: 29px;
                line-height: 29px;
                background: #c40f39;
                font-family: 'Montserrat', sans-serif;
                font-size: 17px;
                color: #fff;
            }
        }
    }
    
    & .oversea {
        & .seaimg {
            height: 433px;
            & > img {
                height: 100%;
            }
        }

        & .infobox {

            & .infobox1 {
                box-shadow: 0px -1px 0 #ddd inset;
                border-right: 1px solid #ddd;
                border-left: 1px solid #ddd;
                padding: 40px;
                & .infoboxTitle {
                    font-size: 17px;
                    color: #333;
                    font-family: 'Montserrat', sans-serif;
                    margin-bottom: 20px;
                    & span {
                        color: #c40f39;
                        font-weight: 600;
                        margin-right: 10px;
                    }
                }
                & dl {
                    display: block;
                    margin-bottom: 5px;
                    & dt {
                        width: 90px;
                        display: inline-block;
                        font-size: 14px;
                        color: #666;
                    }
                    & dd {
                        display: inline-block;
                        font-size: 14px;
                        color: #999;
                        line-height: 180%;
                        font-family: 'Montserrat', sans-serif;
                    }
                }
                & .link {
                    text-decoration: none;
                    color: #999;
                    &:hover {
                        color: #000;
                    }
                }
            }
        }
    }
    
`;

const IntroduceHistory = styled.div`
    position: relative;

    &  .area_l {
        width: 50%;
        text-align: right;
        & .area_l_title {
            padding-right: 60px;
            padding-bottom: 25px;
            padding-top: 60px;
            margin-bottom: 25px;
            font-size: 33px;
            color: #333;
            line-height: 130%;
            font-weight: 300;
            border-bottom: 1px solid #ddd;
            position: relative;
            &::after {
                content: '';
                width: 5px;
                height: 5px;
                background: #c40f39;
                display: block;
                position: absolute;
                right: -2px;
                bottom: -3px;
                z-index: 3;
            }
            & .year {
                font-family: 'Montserrat', sans-serif;
                font-size: 15px;
                margin-right: 10px;
            }
            & .redText {
                color: #c40f39;
            }
        }
        & > dl {
            padding-right: 60px;
            padding-bottom: 10px;
            & dt {
                float: right;
                width: 54px;
                font-family: 'Montserrat', sans-serif;
                font-size: 15px;
                color: #c40f39;
                font-weight: 500;
                line-height: 130%;
            }
            & dd {
                font-size: 14px;
                color: #777;
            }
        }
    }
    & .img_r {
        position: absolute;
        left: 50%;
        top: 178px;
        margin-left: 60px;
    }

    & .area_r {
            width: 50%;
            position: absolute;
            left: 50%;
            z-index: 3;
            & .area_r_title {
                padding-left: 60px;
                padding-bottom: 25px;
                padding-top: 60px;
                margin-bottom: 25px;
                font-size: 33px;
                color: #333;
                line-height: 130%;
                font-weight: 300;
                border-bottom: 1px solid #ddd;
                position: relative;

                &::after {
                    content: '';
                    width: 5px;
                    height: 5px;
                    background: #c40f39;
                    display: block;
                    position: absolute;
                    left: -2px;
                    bottom: -3px;
                    z-index: 3;
                }
                & .year {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 15px;
                    margin-left: 10px;
                }
                & .redText {
                    color: #c40f39;
                }
            }
            & > dl {
                padding-left: 60px;
                padding-bottom: 10px;
                & dt {
                    float: left;
                    width: 54px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 15px;
                    color: #c40f39;
                    font-weight: 500;
                    line-height: 130%;
                }
                & dd {
                    font-size: 14px;
                    color: #777;
                }
            }
    }
    & .img_l {
        position: absolute;
        right: 50%;
        top: 178px;
        margin-right: 60px;
    }

    & .area2 {
        position: relative;
        width: 100%;
        height: 600px;
        background: #f8f8f8;
        margin-top: 150px;
    }

    & .area3 {
        height: 500px;
        position: relative;
    }

    & .area4 {
        position: relative;
        width: 100%;
        height: 560px;
        background: #f8f8f8;
        /* margin-top: 150px; */
    }

    & .area5 {
        height: 500px;
        position: relative;
    }

    & .area6 {
        position: relative;
        width: 100%;
        height: 520px;
        background: #f8f8f8;
        /* margin-top: 150px; */
    }

    & .area7 {
        height: 600px;
        position: relative;
    }

`;

const HistoryCenterLine = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 2;
    transform: translateX(-50%);
    background: #ddd;
    width: 1px;
    height: 100%;
`;

const Introduce = () => {

    const CeoArea = () => {

        const [activeTab2, setActiveTab2] = useState('ceo');

        const handleTabClick2 = (tab) => {
            setActiveTab2(tab);
        }

        const location = useLocation();

        const {param} = location.state || {};

        const renderContent = () => {

            switch(param) {
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
                            <IntroduceCompany>
                                <div className='info1'>
                                    <h2 className='num_title'>
                                        <span className='num'>01</span>
                                        계열사 소개
                                    </h2>
                                    <div className='subsidiary'>
                                        <div className='sub1'>
                                            <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img1.jpg`} alt='company_info2_img1' />
                                            <div className='titbox'>
                                                <div className='sbj'>
                                                    PARKER/WATERMAN <br />
                                                    TOMBOW <span>국내 공식</span> 수입업체
                                                </div>
                                                <div className='blogo'>
                                                    <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_logo1.jpg`} alt='company_info2_logo1' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub2'>
                                            <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img2.jpg`} alt='company_info2_img2' />
                                            <div className='titbox'>
                                                <div className='sbj'>
                                                    HP전산용품 & '<span>통합출력관리</span> <br />
                                                    <span>서비스</span>' 솔루션 공급
                                                </div>
                                                <div className='blogo'>
                                                    <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_logo2.jpg`} alt='company_info2_logo2' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub3'>
                                            <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img3.jpg`} alt='company_info2_img3' />
                                            <div className='titbox'>
                                                <div className='sbj'>
                                                    철학, 역사, 예술, 과학, 경제를<br />
                                                    <span>미술로 만나다</span>
                                                </div>
                                                <div className='blogo'>
                                                    <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_logo3.jpg`} alt='company_info2_logo3' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sub4'>
                                            <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_img4.jpg`} alt='company_info2_img4' />
                                            <div className='titbox'>
                                                <div className='sbj'>
                                                    모나미 문구제품<br />
                                                    <span>전문 제조 기업</span>
                                                </div>
                                                <div className='blogo'>
                                                    <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info2_logo4.jpg`} alt='company_info2_logo4' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='info2'>
                                    <h2 className='num_title'>
                                        <span className='num'>02</span>
                                        해외법인
                                    </h2>
                                    <div className='oversea'>
                                        <div className='seaimg'>
                                            <img src={`${process.env.PUBLIC_URL}img/introduce/company/company_info3_img1.jpg`} alt='company_info3_img1' />
                                        </div>
                                        <div className='infobox'>
                                            <div className='infobox1'>
                                                <div className='infoboxTitle'>
                                                    <span>THAILAND</span>
                                                    모나미 타일랜드 (방콕)
                                                </div>
                                                <dl>
                                                    <dt>법인명</dt>
                                                    <dd>MONAMI THAILAND</dd>
                                                </dl>
                                                <dl>
                                                    <dt>주소</dt>
                                                    <dd>
                                                        #475 Siripinyo Bldg.,12th floor, Si Ayutthaya Rd.,Khwaeng 
                                                        ThanonPhayathai, Khet Ratchathewi, Bangkok 10400 Thailand
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>전화</dt>
                                                    <dd>
                                                        +66-2-640-0980-2
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>팩스</dt>
                                                    <dd>
                                                        +66-2-640-0980-2
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>SNS</dt>
                                                    <dd>
                                                    <a href="http://www.facebook.com/monami.thailand" target='_blank' rel="noopener noreferrer" className='link'>
                                                        www.facebook.com/monami.thailand/
                                                    </a>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className='infobox1'>
                                                <div className='infoboxTitle'>
                                                    <span>THAILAND</span>
                                                    모나미 타일랜드 (아마타 공장)
                                                </div>
                                                <dl>
                                                    <dt>주소</dt>
                                                    <dd>
                                                        Amata City Industrial Estate 7/281 Moo. 
                                                        6 Mabyangporn,
                                                        Plaukdang, Rayong 21140 Thailand
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>전화</dt>
                                                    <dd>
                                                        +66-38-6508091-4218
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className='infobox1'>
                                                <div className='infoboxTitle'>
                                                    <span>CHINA</span>
                                                    상해 모나미 (상하이)
                                                </div>
                                                <dl>
                                                    <dt>법인명</dt>
                                                    <dd>上海慕那美文化用品有限公司  (SHANGHAI MONAMI) </dd>
                                                </dl>
                                                <dl>
                                                    <dt>홈페이지</dt>
                                                    <dd>
                                                        <a href="http://www.monami.com.cn" target='_blank' rel="noopener noreferrer" className='link'>
                                                            www.monami.com.cn
                                                        </a>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>주소(중문)</dt>
                                                    <dd>
                                                        嘉定???路1388?9??
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>주소(영문)</dt>
                                                    <dd>
                                                        Building No.9,?1388?,XingXian Road, Jiading District,, Shanghai, China.
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>전화</dt>
                                                    <dd>
                                                        +86-21-69521210-69521216
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>팩스</dt>
                                                    <dd>
                                                        +86-21-69521250-59160776
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>SNS</dt>
                                                    <dd>
                                                        <a href="http://weibo.com/shmonami" target='_blank' rel="noopener noreferrer" className='link'>
                                                            weibo.com/shmonami
                                                        </a>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className='infobox1'>
                                                <div className='infoboxTitle'>
                                                    <span>POLAND</span>
                                                    제니스 모나미 (바르샤바)
                                                </div>
                                                <dl>
                                                    <dt>법인명</dt>
                                                    <dd>
                                                        ZENITH MONAMI
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>주소</dt>
                                                    <dd>
                                                        ul. Poleczki 23, 02-822, Warsaw, Poland.
                                                    </dd>
                                                </dl>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </IntroduceCompany>
                        </>
                    )
                case 'history' :
                    return(
                        <>
                            <IntroduceTitle>
                                MONAMI <span>HISTORY</span>
                            </IntroduceTitle>
                            <IntroduceHistory>
                                <div className='area1'>
                                    <div className='area_l'>
                                        <div className='area_l_title'>
                                            문화를 선도하는 <br />
                                            <span className='year'>2021 ~ 2024</span> 기업으로의 <span className='redText'>도약</span>
                                        </div>
                                        <dl>
                                            <dt>2024</dt>
                                            <dd>모나미 컨셉스토어 수원점 오픈</dd>
                                            <dd style={{paddingRight: "54px"}}>사무용품 브랜드 LOBDA(롭다) 론칭</dd>
                                        </dl>
                                        <dl>
                                            <dt>2023</dt>
                                            <dd>모나미 패션 랩 브랜드 런칭 </dd>
                                            <dd style={{paddingRight: "54px"}}>153 ID 만년필, 153 리스펙트 리파인 출시</dd>
                                        </dl>
                                        <dl>
                                            <dt>2022</dt>
                                            <dd>모나미 컨셉스토어 성수점 오픈 </dd>
                                            <dd style={{paddingRight: "54px"}}>모나미 코스메틱 용인 공장 신축</dd>
                                        </dl>
                                        <dl>
                                            <dt>2021</dt>
                                            <dd>디자인 문구 브랜드 제니스(Zenith), 지퀀스(ZEQUENZ) 론칭</dd>
                                            <dd style={{paddingRight: "54px"}}>모나미몰 쇼핑 앱 출시</dd>
                                        </dl>
                                    </div>
                                    <div className='img_r'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/history/history_img7.png`} alt='history_img7' />
                                    </div>
                                </div>
                                <div className='area2'>
                                    <div className='area_r'>
                                        <div className='area_r_title'>
                                            새로운 <br />
                                            50년의 <span className='redText'>시작</span><span className='year'>2010 ~ 2020</span>
                                        </div>
                                        <dl>
                                            <dt>2020</dt>
                                            <dd>모나미 창립 60주년 기념 프러스펜 3000 데스크펜, 프러스펜 3000 60색 세트 출시</dd>
                                        </dl>
                                        <dl>
                                            <dt>2019</dt>
                                            <dd>모나미 컨셉스토어 인사동점 오픈</dd>
                                        </dl>
                                        <dl>
                                            <dt>2018</dt>
                                            <dd>대한민국 디자인 대상 디자인 경영부문 국무총리상 수상 </dd>
                                            <dd style={{paddingLeft: "54px"}}>모나미 스토어 오픈 (롯데백화점 부산점/평촌점, MCC 합정)</dd>
                                            <dd style={{paddingLeft: "54px"}}>153 고급필기구 런칭 (153 NEO 만년필)</dd>
                                            <dd style={{paddingLeft: "54px"}}>모나미 타일랜드 아마타공장 증축</dd>
                                        </dl>
                                        <dl>
                                            <dt>2017</dt>
                                            <dd>153 고급 필기구 런칭(153 GOLD)</dd>
                                        </dl>
                                        <dl>
                                            <dt>2016</dt>
                                            <dd>모나미 컨셉스토어 2호점(DDP) / 3호점(에버랜드) 오픈</dd>
                                        </dl>
                                        <dl>
                                            <dt>2015</dt>
                                            <dd>국내문구업계 최초 모나미 컨셉스토어 1호점 오픈 (서울 합정동)</dd>
                                        </dl>
                                        <dl>
                                            <dt>2014</dt>
                                            <dd>153 고급 필기구 런칭 (153 리미티드, 153 ID, 153 리스펙트)</dd>
                                        </dl>
                                        <dl>
                                            <dt>2013</dt>
                                            <dd>153 볼펜 출시 50년 / 프러스펜 S 출시</dd>
                                        </dl>
                                        <dl>
                                            <dt>2012</dt>
                                            <dd>기업용 홍보 통합 제작 서비스 MPOD 솔루션 설립</dd>
                                        </dl>
                                        <dl>
                                            <dt>2010</dt>
                                            <dd>모나미 창립 50주년 / 모나미 타일랜드 아마타공장 신축</dd>
                                        </dl>
                                    </div>
                                    <div className='img_l'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/history/history_img1.png`} alt='history_img1' />
                                    </div>
                                </div>
                                <div className='area3'>
                                    <div className='area_l'>
                                        <div className='area_l_title'>
                                            사무용품 유통서비스 <br />
                                            <span className='year'>2006 ~ 2009</span> 기업으로의 <span className='redText'>도약</span>
                                        </div>
                                        <dl>
                                            <dt>2009</dt>
                                            <dd>프로유성매직 국내문구 최초 RED DOT AWARD 수상</dd>
                                        </dl>
                                        <dl>
                                            <dt>2008</dt>
                                            <dd>모나미스테이션 사업개시</dd>
                                        </dl>
                                        <dl>
                                            <dt>2007</dt>
                                            <dd>세계최초 생잉크 보드마커 시그마플로 출시</dd>
                                        </dl>
                                        <dl>
                                            <dt>2006</dt>
                                            <dd>MIS(모나미이미징솔루션)설립</dd>
                                        </dl>
                                    </div>
                                    <div className='img_r'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/history/history_img2.png`} alt='history_img2' />
                                    </div>
                                </div>
                                <div className='area4'>
                                    <div className='area_r'>
                                        <div className='area_r_title'>
                                            글로벌 <br />
                                            기업으로서의 <span className='redText'>도약</span><span className='year'>2000 ~ 2001</span>
                                        </div>
                                        <dl>
                                            <dt>2001</dt>
                                            <dd>상해 모나미 문화용품 유한공사 (중국현지법인) 설립</dd>
                                        </dl>
                                        <dl>
                                            <dt>2001</dt>
                                            <dd>Zenith-MonAmi 설립 (폴란드 합작법인)</dd>
                                        </dl>
                                        <dl>
                                            <dt>2001</dt>
                                            <dd>e-비지니스 사업부 신설</dd>
                                        </dl>
                                        <dl>
                                            <dt>2000</dt>
                                            <dd>(주)익스프레스라인 14와 합병</dd>
                                        </dl>
                                    </div>
                                    <div className='img_l'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/history/history_img3.png`} alt='history_img3' />
                                    </div>
                                </div>
                                <div className='area5'>
                                    <div className='area_l'>
                                        <div className='area_l_title'>
                                            사업진출 <br />
                                            <span className='year'>1990 ~ 1996</span><span className='redText'>다각화</span>
                                        </div>
                                        <dl>
                                            <dt>1996</dt>
                                            <dd>(주)모나미로 (주)모나미 애드 합병</dd>
                                        </dl>
                                        <dl>
                                            <dt>1992</dt>
                                            <dd>(주)모나미 애드 / 항소 인터내셔널 (미국)설립</dd>
                                        </dl>
                                        <dl>
                                            <dt>1990</dt>
                                            <dd>(주)항소 설립</dd>
                                        </dl>
                                        <dl>
                                            <dt>1990</dt>
                                            <dd>모나미 데이타 시스템 설립 (1992년 모나미컴퓨터시스템으로 변경)</dd>
                                        </dl>
                                    </div>
                                    <div className='img_r'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/history/history_img4.png`} alt='history_img4' />
                                    </div>
                                </div>
                                <div className='area6'>
                                    <div className='area_r'>
                                        <div className='area_r_title'>
                                            모나미의 <br />
                                            <span className='redText'>성장기</span><span className='year'>1970 ~ 1989</span>
                                        </div>
                                        <dl>
                                            <dt>1989</dt>
                                            <dd>모나미 타일랜드 출범 (태국 차이아난다사와 합작)</dd>
                                        </dl>
                                        <dl>
                                            <dt>1988</dt>
                                            <dd>안산 공장 신축, 이전(1,2 공장 통합)</dd>
                                        </dl>
                                        <dl>
                                            <dt>1974</dt>
                                            <dd>주식회사 모나미로 상호변경 / 증권 거래소 주식 상장</dd>
                                        </dl>
                                        <dl>
                                            <dt>1970</dt>
                                            <dd>모나미 쎌라 만년필(주) 흡수합병</dd>
                                        </dl>
                                        <dl>
                                            <dt>1970</dt>
                                            <dd>제2공장 신축(성수동)</dd>
                                        </dl>
                                    </div>
                                    <div className='img_l'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/history/history_img5.png`} alt='history_img5' />
                                    </div>
                                </div>
                                <div className='area7'>
                                    <div className='area_l'>
                                        <div className='area_l_title'>
                                            모나미의 창업과 <br />
                                            <span className='year'>1960 ~ 1967</span><span className='redText'>도약기</span>
                                        </div>
                                        <dl>
                                            <dt>1967</dt>
                                            <dd>모나미 화학 공업 주식회사 설립</dd>
                                        </dl>
                                        <dl>
                                            <dt>1963</dt>
                                            <dd>제1공장 신축(성수동)</dd>
                                        </dl>
                                        <dl>
                                            <dt>1963</dt>
                                            <dd>사인펜, 매직펜 생산</dd>
                                        </dl>
                                        <dl>
                                            <dt>1963</dt>
                                            <dd>153 볼펜 생산개시</dd>
                                        </dl>
                                        <dl>
                                            <dt>1960</dt>
                                            <dd>광신 화학 공업사 설립 (회화구류 생산 시작)</dd>
                                        </dl>
                                    </div>
                                    <div className='img_r'>
                                        <img src={`${process.env.PUBLIC_URL}img/introduce/history/history_img6.png`} alt='history_img6' />
                                    </div>
                                </div>
                                <HistoryCenterLine></HistoryCenterLine>
                            </IntroduceHistory>
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
                                <li onClick={()=>{handleTabClick2('history')}} className={activeTab2 === 'history' ? 'zmfflr' : ''}>
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
                <Top />
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