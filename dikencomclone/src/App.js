import React from 'react'
import './style.css'
import './index.css'
import './App.css';
import Footer from './Templates/Footer';
import Header from './Templates/Header';
import Body from './Templates/Body';
import Aside from './Templates/Aside';
function App() {
  return (
    <div className='container d-flex flex-column mt-2'>
      <Header></Header>
      <div className="row" id="ana_icerik">
        <Body></Body>
        <Aside></Aside>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App