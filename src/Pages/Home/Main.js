import React, { useState } from 'react'
import styled from 'styled-components'
import './Main.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    padding: 75px 0 90px;
`;

const NewCover = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    & img {
        cursor: pointer;
    }
`;

const NewCoverTop = styled.div`
    margin: 13px 0 22px 0;
    display: flex;
    justify-content: space-between;
`;
const NewCoverTopLeft = styled.div`
    height: 100%;
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


const NewCoverBot = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 22px;
`;

const ProductCover = styled.div`
    width: 100%;
    background: #eee;
    text-align: center;
    padding: 70px 0 100px 0;

    & > h2{
        font-size: 32px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #000;
        line-height: 120%;
        font-family: "Montserrat", sans-serif;
    }

    & > h2::after {
        content: "";
        display: block;
        width: 26px;
        height: 4px;
        margin: 10px auto;
        background: #c40f39;
    }
`;

const TabList = styled.div`
    margin: 40px 0;

    & > li {
        display: inline-block;
        width: 153px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        color: #898989;
        border: 2px solid #bcbcbc;
        cursor: pointer;
        margin-left: 4px;
    }

    & > li:nth-child(1) {
        margin-left: 0;
    }
`;

const SlideInfo = styled.div`
    
    height: 102px;
    padding: 0 30px;
    background: #fff;
    text-align: left;
`;

const Cursor = styled.div`
    width: 100%;
    border-bottom: 1px dotted #ccc;
    & > div {
        width: 850px;
        position: relative;
        margin: 0 auto;
    }
`;

const CursorImg = styled.div`
    width: 100px;
    margin: 0 auto;
    font-size: 12px;
    & > div {
        margin-bottom: 25px;
    }
`;

const VideoCover = styled.div`
    & > video {
        width: 100%;
    }
`;

// news

const NewsCover = styled.div`
    width: 100%;
    height: 355px;
`;

const NewsInner = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 5fr 2.5fr 2.5fr;
`;


const NewsLeft = styled.div`
    padding-top: 45px;
    padding-right: 49px;
`;

const NewsTitle = styled.div`
    position: relative;
    margin-bottom: 15px;
    & > h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #000;
        line-height: 120%;
    }
    & > h2::after {
        content: '';
        width: 26px;
        height: 4px;
        background: #c40f39;
        margin: 5px 0 0;
        display: block;
    }

    & > span {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 11px;
        color: #3d3e38;
        letter-spacing: 1px;
        border-bottom: 1px solid #3d3e38;
        cursor: pointer;
    }
`;

const NewsInfo = styled.div`
    padding: 10px 0 20px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #bbb;
    & img {
        height: 100%;
    }
    & div:nth-child(2) {
        width: 456px;
        margin-top: 5px;
        position: relative;
    }
    & div:nth-child(2) h2 {
        font-size: 21px;
        color: #000;
        margin-bottom: 5px;
        cursor: pointer;
    }
    & div:nth-child(2) p {
        font-size: 14px;
        color: #555;
        word-break: keep-all;
        cursor: pointer;
        margin-bottom: 15px;
    }
    & div:nth-child(2) span {
        position: absolute;
        right: 0;
        bottom: 0;
        cursor: pointer;
        color: #888;
    }
`;

const NewsInfoList = styled.div`
    
    & li {
        display: flex;
        justify-content: space-between;
        line-height: 170%;
        cursor: pointer;
        & p {
            color: #555;
        }
        & span {
            color: #888;
        }
    }
`;

const NewsMid = styled.div`
    background-image: url('./../../img/inquiry_bg.jpg');
    width: 349px;
    height: 355px;
    border-right: 1px solid #ddd;
    text-align: center;
    & > div {
        margin-top: 65px;
        margin-bottom: 15px;
    }
    & h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #000;
        line-height: 120%;
    }
    & h2::after {
        content: '';
        width: 26px;
        height: 4px;
        display: block;
        background: #c40f39;
        margin: 10px auto;
    }
    & p {
        color: #6a6a6a;
        line-height: 160%;
        margin-bottom: 45px;
    }
`;

const NewsRight = styled.div`
    background-image: url('./../../img/shop_bg.png');
    width: 349px;
    height: 355px;
    border-right: 1px solid #ddd;
    text-align: center;
    & > div {
        margin-top: 65px;
        margin-bottom: 15px;
    }
    & h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #000;
        line-height: 120%;
    }
    & h2::after {
        content: '';
        width: 26px;
        height: 4px;
        display: block;
        background: #c40f39;
        margin: 10px auto;
    }
    & p {
        color: #6a6a6a;
        line-height: 160%;
        margin-bottom: 45px;
    }
`;

const InquiryButton = styled.button`
    display: block;
    width: 167px;
    height: 35px;
    margin: 0 auto;
    text-align: center;
    color: #c40f39;
    font-weight: 500;
    border: 2px solid #c40f39;
    transition: all 0.6s;
    background: none;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    &:hover {
        background: #c40f39;
        color: #fff;
        transition: all 0.6s;
    }
`;

const BuyButton = styled.button`
    display: block;
    width: 167px;
    height: 35px;
    margin: 0 auto;
    text-align: center;
    color: #c40f39;
    font-weight: 500;
    border: 2px solid #c40f39;
    transition: all 0.6s;
    background: none;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    &:hover {
        background: #c40f39;
        color: #fff;
        transition: all 0.6s;
    }
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
                            <div className='imgCover'>
                                <img src={`${process.env.PUBLIC_URL}img/new1.jpg`} alt='1'/>
                                <div className='imgHover top49'>
                                    <div className='align'>
                                        <div className='cate'>PEN</div>
                                        <div className='name'>FX ZETA C3</div>
                                        <div className='plus'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NewCoverTopLeft>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/new2.jpg`} alt='2' />
                            <div className='imgHover'>
                                <div className='align'>
                                    <div className='cate'>NOTE</div>
                                    <div className='name'>지퀸스</div>
                                    <div className='plus'>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NewCoverTop>
                    <NewCoverBot>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/new3.jpg`} alt='3' />
                            <div className='imgHover top3'>
                                <div className='align'>
                                    <div className='cate'>SHARP</div>
                                    <div className='name'>제니스7샤프</div>
                                    <div className='plus'>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/new4.jpg`} alt='4' />
                            <div className='imgHover'>
                                <div className='align'>
                                    <div className='cate'>FOUNTAIN PEN</div>
                                    <div className='name'>153 아이디 만년필</div>
                                    <div className='plus'>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='imgCover'>
                            <img src={`${process.env.PUBLIC_URL}img/new5.jpg`} alt='5' />
                            <div className='imgHover top3'>
                                <div className='align'>
                                    <div className='cate'>PREMIUM PEN</div>
                                    <div className='name'>153 리스펙트 리파인</div>
                                    <div className='plus'>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NewCoverBot>
                </NewCover>
            </New>
        )
    }

    const Product = () => {

        const [activeTab, setActiveTab] = useState('premium');


        const list = [
            {
                img :  `${process.env.PUBLIC_URL}img/premium11.jpg`,
                alt : 'premium11',
                cate : '프리미엄펜',
                name : '프러스펜 3000 프라임',
            },
            {
                img :  `${process.env.PUBLIC_URL}img/premium1.jpg`,
                alt : 'premium1',
                cate : '프리미엄펜',
                name : '153 리스펙트 리파인',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium2.jpg`,
                alt : 'premium2',
                cate : '만년필',
                name : '153 아이디 만년필',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium3.jpg`,
                alt : 'premium3',
                cate : '만년필',
                name : '153 네오 만년필 EF',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium4.jpg`,
                alt : 'premium4',
                cate : '프리미엄펜',
                name : '153 블랙 & 화이트',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium5.jpg`,
                alt : 'premium5',
                cate : '프리미엄펜',
                name : '153 골드',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium6.jpg`,
                alt : 'premium6',
                cate : '프리미엄펜',
                name : '153 아이디',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium7.jpg`,
                alt : 'premium7',
                cate : '프리미엄펜',
                name : '60주년 프러스펜 3000 데스크펜 스페셜 에디션',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium8.jpg`,
                alt : 'premium8',
                cate : '고급샤프',
                name : '153 아이디 샤프',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium9.jpg`,
                alt : 'premium9',
                cate : '프리미엄펜',
                name : '153 네오',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium10.jpg`,
                alt : 'premium10',
                cate : '프리미엄펜',
                name : '153 리스펙트',
            },
        ]

        const list2 = [
            {
                img :  `${process.env.PUBLIC_URL}img/pencil1.jpg`,
                alt : 'pencil1',
                cate : '샤프/샤프심',
                name : '그리픽스 팝 샤프',
            },
            {
                img : `${process.env.PUBLIC_URL}img/pencil2.jpg`,
                alt : 'pencil2',
                cate : '수성마카',
                name : '사인펜 슈퍼 파스텔 12색',
            },
        ]

        const list3 = [
            {
                img :  `${process.env.PUBLIC_URL}img/maka1.jpg`,
                alt : 'maka1',
                cate : '워터브러쉬',
                name : '워터 리얼 브러쉬',
            },
            {
                img : `${process.env.PUBLIC_URL}img/maka2.jpg`,
                alt : 'maka2',
                cate : '수성마카',
                name : '컬러 리얼 브러쉬',
            },
        ]

        const list4 = [
            {
                img :  `${process.env.PUBLIC_URL}img/note1.jpg`,
                alt : 'note1',
                cate : '노트',
                name : '지퀀스 노트 The Color A5',
            },
            {
                img : `${process.env.PUBLIC_URL}img/note2.jpg`,
                alt : 'note2',
                cate : '풀',
                name : '다목적으로 사용 가능한 목공 풀',
            },
        ]

        const handleTabClick = (tab) => {
            setActiveTab(tab)
        }

        const renderContent = () => {
            switch(activeTab) {
                case 'premium' :
                    return renderProductList(list)
                case 'pencil' :
                    return renderProductList(list2)
                case 'maka' :
                    return renderProductList(list3)
                case 'note' :
                    return renderProductList(list4)
                default :
                    return <div></div>;
            }
        }

        const renderProductList = (items) => (
            <ProductCover>
                <h2>BEST PRODUCT</h2>
                <p>언제 어디서나 생활 속에 함께하는 모나미</p>
                <TabList>
                    <li onClick={()=>handleTabClick('premium')} className={activeTab === 'premium' ? 'on' : ''}>프리미엄 펜</li>
                    <li onClick={()=>handleTabClick('pencil')} className={activeTab === 'pencil' ? 'on' : ''}>펜·펜슬</li>
                    <li onClick={()=>handleTabClick('maka')} className={activeTab === 'maka' ? 'on' : ''}>마카·컬러링</li>
                    <li onClick={()=>handleTabClick('note')} className={activeTab === 'note' ? 'on' : ''}>노트·사무용품</li>
                </TabList>
                <div>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={7}
                        pagination={{ clickable: true }}
                    >
                        {items.map((i,index) => (
                        <SwiperSlide className='slide' key={index}>
                            <div className='imgCover'>
                                <img src={i.img} alt={i.alt} />
                            </div>
                            <SlideInfo>
                                <p className='cate'>{i.cate}</p>
                                <h2 className='name'>{i.name}</h2>
                            </SlideInfo>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Cursor>
                    <div className='cursor'>
                        <span className='arr1'>
                            <img src={`${process.env.PUBLIC_URL}img/p_arr1.gif`} alt='p_arr1' />
                        </span>
                        <span className='arr2'>
                            <img src={`${process.env.PUBLIC_URL}img/p_arr2.gif`} alt='p_arr2' />
                        </span>
                        <CursorImg>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}img/p_cursor.gif`} alt='p_cursor' />
                            </div>
                            DRAG & SCROLL
                        </CursorImg>
                    </div>
                </Cursor>
            </ProductCover>
        )
        return renderContent();

    }

    const VideoArea = () => {
        return(
            <VideoCover>
                <video controls muted autoPlay>
                    <source src={`${process.env.PUBLIC_URL}img/monami_video.mp4`} type='video/mp4' />
                </video>
            </VideoCover>
        )
    }

    const NewsArea = () => {
        return(
            <NewsCover>
                <NewsInner>
                    <NewsLeft>
                        <NewsTitle>
                            <h2>MONAMI NEWS</h2>
                            <span>MORE</span>
                        </NewsTitle>
                        <NewsInfo>
                            <div><img src={`${process.env.PUBLIC_URL}img/news_profile.jpg`} alt='1' /></div>
                            <div>
                                <h2>모나미 X 오닐(O’NEILL) 협업 컬렉션 출시</h2>
                                <p>
									모나미 X 오닐(O'NEILL) 협업 컬렉션 출시... 153 볼펜으로 구현한 펜 드로잉 스포츠웨어 눈길- ‘모나미 패션 랩’ ..
                                </p>
                                <span>2024-03-25</span>
                            </div>
                        </NewsInfo>
                        <NewsInfoList>
                            <li>
                                <p>- 모나미,신학기 대전 진행</p>
                                <span>2024-02-19</span>
                            </li>
                            <li>
                                <p>- 모나미, 공간의 가치를 높인 사무용품 브랜드 ‘LOBDA(롭다)’ 론칭</p>
                                <span>2024-02-14</span>
                            </li>
                            <li>
                                <p>- 모나미, 스타필드 수원에 모나미스토어 신규 오픈</p>
                                <span>2024-01-25</span>
                            </li>
                        </NewsInfoList>
                    </NewsLeft>
                    <NewsMid>
                        <div>
                            <img  src={`${process.env.PUBLIC_URL}img/inquiry_tit_bg.png`} alt='inquiry_tit_bg' />
                        </div>
                        <h2>INQUIRY</h2>
                        <p>
                            언제나 소중한 의견에 귀 기울이겠습니다.<br />
                            궁금한 사항은 문의하세요.
                        </p>
                        <InquiryButton>
                            INQUIRY NOW
                        </InquiryButton>
                    </NewsMid>
                    <NewsRight>
                        <div>
                            <img  src={`${process.env.PUBLIC_URL}img/brandstore_tit_bg.png`} alt='brandstore_tit_bg' />
                        </div>
                        <h2>모나미 네이버 브랜드스토어</h2>
                        <p>
                            모나미 공식 쇼핑몰입니다.<br />
                            공식몰만의 다양한 혜택을 만나보세요.
                        </p>
                        <BuyButton>
                            BUY NOW
                        </BuyButton>
                    </NewsRight>
                </NewsInner>
            </NewsCover>
        )
    }


    return (
        <div>
            <Visual />
            <NewArea />
            <Product />
            <VideoArea />
            <NewsArea />
        </div>
    )
}

export default Main