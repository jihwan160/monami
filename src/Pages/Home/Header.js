import React, { useEffect, useState } from 'react'
import './Header.scss'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

const HTCover = styled.div`
    height: 58px;
    border-bottom: 1px solid #eaeaea;
`;
const HT = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
`;

const HTLeft = styled.div`
    display: flex;
    align-items: center;
    & > div {
        margin-left: 8px;
        cursor: pointer;
    }
    & > select {
        width: 86px;
        height: 30px;
        /* padding-left: 14px; */
        text-align: center;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        font-size: 12px;
        color: #000;
        font-family: "Montserrat", sans-serif;
        cursor: pointer;
    }
    
`;

const HTRight = styled.div`
    display: flex;
    align-items: center;
    & > li {
        cursor: pointer;
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        color: #9b9a9a;
    }
    & > li::after {
        content: '';
        width: 1px;
        height: 7px;
        display: inline-block;
        background: #9b9a9a;
        margin-left: 10px;
        margin-right: 12px;
    }
    & > li:last-child::after {
        width: 0;
        margin-left: 0;
        margin-right: 0;
    }
`;

const GnbCover = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const Logo = styled.div`
    width: 162px;
    cursor: pointer;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const GnbList = styled.div`
    display: flex;
    align-items: center;
    & > li {
        margin: 0 34px;
    }
    & > li:nth-child(1) {
        margin-left: 0;
    }
    & > li:nth-child(6) {
        margin-right: 0;
    }
    & > li > span {
        display: block;
        height: 89px;
        line-height: 89px;
        font-size: 18px;
        color: #303030;
        transition: all 0.3s;
        cursor: pointer;
        font-family: "Noto Sans KR", sans-serif;
    }
    & > li:nth-child(3) span {
        font-family: "Montserrat", sans-serif;
    }
`;

const SearchMenu = styled.div`
    display: flex;
    &>div {
        cursor: pointer;
        
    }
`;

const Hamburger = styled.div`
    width: 19px;
    height: 16px;
    margin-left: 18px;
    cursor: pointer;
    & > span {
        width: 100%;
        height: 2px;
        display: block;
        background: #303030;
        margin-bottom: 5px;
        transition: all 0.4s;
    }
`;

const Header = () => {

    const [isFix, SetIsFix] = useState(false);

    useEffect(()=>{

        const handleScrollevent = () => {
            SetIsFix(window.scrollY > 0)
        }

            window.addEventListener('scroll', handleScrollevent);

            return() => {
                window.removeEventListener('scroll', handleScrollevent);
            }
    }, [])

    const HeaderTop = () => {
        return(
            <HTCover>
                <HT>
                    <HTLeft>
                        <select>
                            <option>KOR</option>
                        </select>
                        <div><img src={`${process.env.PUBLIC_URL}img/sns_facebook.gif`} alt='1sns_facebook' /></div>
                        <div><img src={`${process.env.PUBLIC_URL}img/sns_insta.gif`} alt='sns_insta' /></div>
                    </HTLeft>
                    <HTRight>
                        <li>HOME</li>
                        <li>SITE MAP</li>
                        <li>CONTACT US</li>
                    </HTRight>
                </HT>
            </HTCover>
        )
    }

    const Gnb = () => {
        
        const navigate = useNavigate(null);

        const [click, setClick] = useState(false);

        function handleClick() {
            setClick(!click)
        }

        const handleParam = (param) => {
            navigate('/introduce', {state : {param}})
            console.log(param)
        }


        return(
            <div>
                <GnbCover>
                    <Logo onClick={()=>{navigate('/')}}>
                        <img src={`${process.env.PUBLIC_URL}img/logo.jpg`} alt='logo' />
                    </Logo>
                    <GnbList>
                        <li className={click ? 'disabled-hover gnb' : 'gnb'}>
                            <span onClick={()=> handleParam('ceo')}>모나미소개</span>
                            <div className='subMenu'>
                                <p onClick={()=> handleParam('ceo')} >
                                    <Link to="#" className='menu'>CEO 메시지</Link>
                                </p>
                                <p onClick={()=> handleParam('company')}>
                                    <Link to="#" className='menu'>회사정보</Link>
                                </p>
                                <p onClick={()=> handleParam('history')}>
                                    <Link to="#" className='menu'>회사연혁</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>윤리강령</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>투자정보</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>CI</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>채용정보</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>찾아오시는 길</Link>
                                </p>
                            </div>
                        </li>
                        <li className={click ? 'disabled-hover gnb' : 'gnb'}>
                            <span>모나미제품</span>
                            <div className='subMenu'>
                                <p>
                                    <Link to="#" className='menu'>프리미엄 펜</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>펜·펜슬</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>마카·컬러링</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>노트·사무용품</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>잉크·리필</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>카탈로그</Link>
                                </p>
                            </div>
                        </li>
                        <li className={click ? 'disabled-hover gnb' : 'gnb'}>
                            <span>NEWS & VIDEO</span>
                            <div className='subMenu'>
                                <p>
                                    <Link to="#" className='menu'>보도자료</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>동영상자료</Link>
                                </p>
                            </div>
                        </li>
                        <li className={click ? 'disabled-hover gnb' : 'gnb'}>
                            <span>모나미 미술대회</span>
                            <div className='subMenu'>
                                <p>
                                    <Link to="#" className='menu'>미술대회 소개</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>수상작 발표</Link>
                                </p>
                            </div>
                        </li>
                        <li className={click ? 'disabled-hover gnb' : 'gnb'}>
                            <span>고객지원</span>
                            <div className='subMenu'>
                                <p>
                                    <Link to="#" className='menu'>자주묻는질문</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>문의하기</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>이벤트</Link>
                                </p>
                            </div>
                        </li>
                        <li className={click ? 'disabled-hover gnb' : 'gnb'}>
                            <span>기업 구매 / 개발</span>
                            <div className='subMenu'>
                                <p>
                                    <Link to="#" className='menu'>대량 구매 문의</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>기업 및 단체 구매</Link>
                                </p>
                                <p>
                                    <Link to="#" className='menu'>산업용 맞춤 제품개발</Link>
                                </p>
                            </div>
                        </li>
                    </GnbList>
                    <SearchMenu>
                        <div><img src={`${process.env.PUBLIC_URL}img/btn_search.gif`} alt='btn_search' /></div>
                        <Hamburger onClick={handleClick}>
                            <span style={{transform : click ? 'rotate(45deg) translateY(10px)' : 'none'}}></span>
                            <span style={{width : click ? '0' : '100%'}}></span>
                            <span style={{transform : click ? 'rotate(-45deg)  translateY(-10px)' : 'none'}}></span>
                        </Hamburger>
                        <div className='allMenu' style={{display : click ? 'grid' : 'none'}}>
                            <div className='allMenuList'>
                                <h2>모나미소개</h2>
                                <ul>
                                    <li>
                                        <p><Link to='#' className='menu'>CEO 메시지</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>회사정보</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>회사연혁</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>윤리강령</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>투자정보</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>CI</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>채용정보</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>찾아오시는 길</Link></p>
                                    </li>
                                </ul>
                            </div>
                            <div className='allMenuList'>
                                <h2>모나미제품</h2>
                                <ul>
                                    <li>
                                        <p><Link to='#' className='menu'>프리미엄 펜</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>펜·펜슬</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>마카·컬러링</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>노트·사무용품</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>잉크·리필</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>카탈로그</Link></p>
                                    </li>
                                </ul>
                            </div>
                            <div className='allMenuList'>
                                <h2>NEWS & VIDEO</h2>
                                <ul>
                                    <li>
                                        <p><Link to='#' className='menu'>보도자료</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>동영상자료</Link></p>
                                    </li>
                                </ul>
                            </div>
                            <div className='allMenuList'>
                                <h2>모나미 미술대회</h2>
                                <ul>
                                    <li>
                                        <p><Link to='#' className='menu'>미술대회 소개</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>수상작 발표</Link></p>
                                    </li>
                                </ul>
                            </div>
                            <div className='allMenuList'>
                                <h2>고객지원</h2>
                                <ul>
                                    <li>
                                        <p><Link to='#' className='menu'>자주묻는질문</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>문의하기</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>이벤트</Link></p>
                                    </li>
                                </ul>
                            </div>
                            <div className='allMenuList'>
                                <h2>기업 구매 / 개발</h2>
                                <ul>
                                    <li>
                                        <p><Link to='#' className='menu'>대량 구매 문의</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>기업 및 단체 구매</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to='#' className='menu'>산업용 맞춤 제품개발</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SearchMenu>
                </GnbCover>
            </div>
        )
    }
    
    return (
        <div id='header' className={isFix ? 'fixedHeader' : ''}>
            <HeaderTop />
            <Gnb />
        </div>
    )
}

export default Header