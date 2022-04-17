import React from 'react'
import FirstNavbar from './FirstNavbar'
import SecondNavbar from './SecondNavbar'
// import resim1 from '../img/topBanner.png'
function Header() {
    return (
        <>
            <FirstNavbar></FirstNavbar>
            <header>
                <div className="container m-0 p-0">
                    <div className="header-img">
                        {/* <img src={resim1} style={{ width: "100%" }} /> */}
                        <img src='img/topBanner.png' style={{ width: "100%" }}></img>
                    </div>
                </div>
            </header>
            <SecondNavbar></SecondNavbar>
        </>
    )
}

export default Header