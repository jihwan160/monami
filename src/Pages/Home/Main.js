import React from 'react'
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
    padding-top: 75px;
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
    padding-top: 70px;

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
        margin: 10px 0;
        background: #c40f39;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    & > div {
        margin: 40px 0;
    }

    & > div > li {
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
    & > div > li:nth-child(1) {
        margin-left: 0;
    }
`;

const SlideInfo = styled.div`
    
    height: 102px;
    padding: 0 30px;
    background: #fff;
    text-align: left;
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
                        <div>
                            <img src={`${process.env.PUBLIC_URL}img/new2.jpg`} alt='2' />
                        </div>
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

    const Product = () => {

        const list = [
            {
                img :  `${process.env.PUBLIC_URL}img/premium1.jpg`,
                cate : '프리미엄펜',
                name : '153 리스펙트 리파인',
            },
            {
                img : `${process.env.PUBLIC_URL}img/premium2.jpg`,
                cate : '만년필',
                name : '153 아이디 만년필',
            },
        ]


        switch('premium') {
            case 'premium' :
                return(
                    <ProductCover>
                        <h2>BEST PRODUCT</h2>
                        <p>언제 어디서나 생활 속에 함께하는 모나미</p>
                        <div>
                            <li className='on'>프리미엄 펜</li>
                            <li>펜·펜슬</li>
                            <li>마카·컬러링</li>
                            <li>노트·사무용품</li>
                        </div>
                        <div>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={7}
                                pagination={{ clickable: true }}
                            >
                                {list.map((i,index) => (
                                <SwiperSlide className='slide' key={index}>
                                    <div className='imgCover'>
                                        <img src={i.img} alt='index' />
                                    </div>
                                    <SlideInfo>
                                        <p className='cate'>{i.cate}</p>
                                        <h2 className='name'>{i.name}</h2>
                                    </SlideInfo>
                                </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </ProductCover>
                )

            case 'pencil' :
                return( 
                    <ProductCover>
                        <h2>BEST PRODUCT</h2>
                        <p>언제 어디서나 생활 속에 함께하는 모나미</p>
                        <div>
                            <li className='on'>프리미엄 펜</li>
                            <li>펜·펜슬</li>
                            <li>마카·컬러링</li>
                            <li>노트·사무용품</li>
                        </div>
                        <div>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={7}
                                pagination={{ clickable: true }}
                            >
                                {list.map((i,index) => (
                                <SwiperSlide className='slide' key={index}>
                                    <div className='imgCover'>
                                        <img src={i.img} alt='index' />
                                    </div>
                                    <SlideInfo>
                                        <p className='cate'>{i.cate}</p>
                                        <h2 className='name'>{i.name}</h2>
                                    </SlideInfo>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </ProductCover>
                )
            default : 
                <div></div>
        }

    }


    return (
        <div>
            <Visual />
            <NewArea />
            <Product />
        </div>
    )
}

export default Main