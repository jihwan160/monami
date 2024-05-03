import React from 'react'
import styled from 'styled-components'


const FooterCover = styled.div`
    width: 100%;
    padding: 60px 0 65px;
    background: #111;
`;


const FooterCoverArea = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
`;

const FooterTop = styled.div`
    width: 100%;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    & ul {
        display: flex;
        align-items: center;
    }
    & li {
        position: relative;
        cursor: pointer;
        color: rgba(255,255,255,0.5);
    }
    & li::after {
        content: '';
        width: 1px;
        height: 11px;
        background:  rgba(255,255,255,0.1);
        display: inline-block;
        margin: 0 10px;
    }
    & li:nth-child(3)::after {
        width: 0;
        margin: 0;
    }
`;

const FooterBot = styled.div`
    padding-top: 20px;
    &::after {
        content: '';
        display: block;
        clear: both;
    }
`;

const FooterBotLeft = styled.div`
    float: left;
    margin-right: 55px;
    & h1 {
        font-family: 'Montserrat',sans-serif;
        font-size: 15px;
        color: #fff;
        margin-bottom: 10px;
        font-weight: normal;
    }
    & address {
        font-size: 14px;
        font-weight: 300;
        color: rgba(255,255,255,0.3);
        font-style: normal;
        margin-bottom: 3px;
        & span {
            display: inline-block;
            padding: 0 10px;
            mix-blend-mode: 3px;
        }
    }
    & p {
        font-size: 12px;
        font-weight: 300;
        color: rgba(255,255,255,0.3);
    }
`;

const FooterBotMid = styled.div`
    float: left;
    & h1 {
        font-family: 'Montserrat',sans-serif;
        font-size: 15px;
        color: #fff;
        margin-bottom: 10px;
        font-weight: normal;
    }
    & p {
        font-family: 'Montserrat',sans-serif;
        font-size: 24px;
        color: rgba(255,255,255,0.5);
    }
`;

const KakaoBtn = styled.button`
    display: block;
    width: 155px;
    height: 32px;
    margin-top: 15px;
    color: #dfdfdf;
    text-align: center;
    border: 1px solid #878787;
    background: #4a4a4a;
    cursor: pointer;
    &::after {
        content: '>';
        display: inline-block;
        width: 9px;
        height: 5px;
        margin: 0 0 2px 5px;
    }
`;

const FooterBotRight = styled.div`
    float: right;
    & select {
        width: 242px;
        height: 34px;
        text-align: left;
        border: 1px solid rgba(255,255,255,0.3);
        background: none;
        color: rgba(255,255,255,0.4);
        font-size: 13px;
        padding: 0 13px;
        outline: none;
        cursor: pointer;
        & option {
            background: #000;
            border-radius: 0px;
        }
    }
`;
const Footer = () => {

    const FooterArea = () => {
        return(
            <FooterCover>
                <FooterCoverArea>
                    <FooterTop>
                        <h1>
                            <img src={`${process.env.PUBLIC_URL}img/foot_logo.jpg`} alt='foot_logo' />
                        </h1>
                        <ul>
                            <li>
                                회사소개
                            </li>
                            <li>
                                개인정보처리방침
                            </li>
                            <li>
                                이메일무단수집거부
                            </li>
                        </ul>
                    </FooterTop>
                    <FooterBot>
                        <FooterBotLeft>
                            <h1>INFO</h1>
                            <address>
                                ADDRESS : 경기도 용인시 수지구 손곡로 17<span>|</span>
                                TEL : 031-216-0153<span>|</span>
                                FAX : 031-270-5154
                            </address>
                            <p>
                                COPYRIGHT(C) 2017 MONAMI.CO.,LTD. ALL RIGHTS RESERVED.
                            </p>
                        </FooterBotLeft>
                        <FooterBotMid>
                            <h1>
                                CUSTOMER CENTER
                            </h1>
                            <p>080-022-0153</p>
                            <KakaoBtn>카카오톡 문의</KakaoBtn>
                        </FooterBotMid>
                        <FooterBotRight>
                            <select>
                                <option hidden>FAMILY SITE</option>
                                <option>모나미몰</option>
                                <option>모나르떼</option>
                                <option>모나미 컨셉스토어</option>
                            </select>
                        </FooterBotRight>
                    </FooterBot>
                </FooterCoverArea>
            </FooterCover>
        )
    }

    return (
        <>
            <FooterArea />
        </>
    )
}

export default Footer