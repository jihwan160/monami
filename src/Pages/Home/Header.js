import React from 'react'

const Header = () => {

    const HeaderTop = () => {
        return(
            <div>
                <div>
                    <select>
                        <option>KOR</option>
                    </select>
                    <div><img src='' alt='1'  /></div>
                    <div><img src='' alt='2'  /></div>
                </div>
                <div>
                    <ul>
                        <li>HOME</li>
                        <li>SITE MAP</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>
        )
    }

    const Gnb = () => {
        return(
            <div>
                
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