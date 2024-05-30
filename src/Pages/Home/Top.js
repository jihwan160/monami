import React from 'react'
import styled from 'styled-components'

const TopBtn = styled.div`
    position: fixed;
    right: 3%;
    bottom: 30%;
    z-index: 999;
    display: block;
    border: 2px solid #c40f39;
    cursor: pointer;
    height: 46px;
    & > img {
        height: 100%;
    }
`;

const Top = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth',
        })
    }


    return (
        <TopBtn onClick={handleScrollToTop}>
            <img src={`${process.env.PUBLIC_URL}img/btn_top.gif`} alt='btn_top' />
        </TopBtn>
    )
}

export default Top