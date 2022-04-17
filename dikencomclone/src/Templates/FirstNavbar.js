import React from 'react'
function FirstNavbar() {
    return (
        <nav>
            <div id="menu-btn-div">
                <button id="menu-btn">MENÜ</button>
            </div>
            <div id='firstNav' class="nav-content bg-white">
                <ul class="d-flex mb-0">
                    <li><a href="">ROTA</a></li>
                    <li><a href="">9 SORUDA</a></li>
                    <li><a href="">DİKEN ÖZEL</a></li>
                    <li><a href="">GÜNÜN 11'I</a></li>
                    <li><a href="">DİKENLİK</a></li>
                    <li><a href="">AKŞAM POSTASI</a></li>
                    <li><a href="">VPN HABER</a></li>
                    <li><a href="">ENGLISH</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default FirstNavbar