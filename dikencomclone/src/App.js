import React from 'react'
import FirstNavbar from './Templates/FirstNavbar'
import './style.css'
import './index.css'
import './App.css';
import resim1 from '../src/img/topBanner.png';
import SecondNavbar from './Templates/SecondNavbar';
import Footer from './Templates/Footer';
import Main from './Templates/Main';
import Aside from './Templates/Aside';
function App() {
  return (
    <div className='container d-flex flex-column mt-2'>
      <FirstNavbar></FirstNavbar>
      <header>
        <div className="container m-0 p-0">
          <div className="header-img">
            <img src={resim1} style={{ width: "100%" }} />
          </div>
        </div>
      </header>
      <SecondNavbar></SecondNavbar>
      <div className="main-content d-flex  bg-white">
      <Main></Main>
      <Aside></Aside>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App