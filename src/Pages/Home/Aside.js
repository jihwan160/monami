import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import './Aside.scss'

const AsideCover = styled.div`
    background: #000;
    width: 216px;
    height: 216px;
    border-radius: 108px;
    text-align: center;
    position: fixed;
    top: 180px;
    right: 15px;
    z-index: 10000;
`;

const AsideTop = styled.div`
    padding: 35px 0 5px;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    & div:nth-child(1) {
        display: block;
        padding: 0 15px 8px 15px;
        border-bottom: 1px solid #bababa;
    }
    & div:nth-child(2) {
        padding: 12px 0 0 0;
    }
`;

const AsideMid = styled.div`
    padding: 10px 0;
    & div {
        display: inline-block;
    }
`;

const AsideBot = styled.div`
    display: inline-block;
    & div {
        cursor: pointer;
        display: inline-block;
    }
`;

const Aside = () => {
    
    const [close, SetClose] = useState(false);

    const handleClose = () => {
        SetClose(!close);
    }

    return (
        <AsideCover className={close ? 'closeBtn' : ''}>
            <AsideTop>
                <Link to='#'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}img/aside1.png`} alt='aside1' />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}img/aside2.png`} alt='aside2' />
                    </div>
                </Link>
            </AsideTop>
            <AsideMid>
                <Link to='#'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}img/aside3.png`} alt='aside3' />
                    </div>
                </Link>
            </AsideMid>
            <AsideBot>
                <div onClick={()=>{handleClose()}}>
                    <img src={`${process.env.PUBLIC_URL}img/aside4.png`} alt='aside4' />
                </div>
            </AsideBot>
        </AsideCover>
    )
}

export default Aside