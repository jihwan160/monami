import React from 'react'
import './Header.scss'
import styled from 'styled-components'

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
    }
`;

const GnbCover = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 89px;
`;

const Logo = styled.div`
    width: 162px;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const GnbList = styled.div`
    
`;

const SearchMenu = styled.div`
    
`;

const Header = () => {

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
        return(
            <div>
                <GnbCover>
                    <Logo>
                        <img src={`${process.env.PUBLIC_URL}img/logo.jpg`} alt='logo' />
                    </Logo>
                    <GnbList>
                        <li>모나미소개</li>
                    </GnbList>
                    <SearchMenu>
                    <img src={`${process.env.PUBLIC_URL}img/btn_search.gif`} alt='btn_search' />
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </SearchMenu>
                </GnbCover>
            </div>
        )
    }
    
    return (
        <div id='header'>
            <HeaderTop />
            <Gnb />
        </div>
    )
}

export default Header