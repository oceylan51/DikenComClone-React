import React from 'react'
import Aside1 from './Aside1'
import Aside2 from './Aside2'
import Aside3 from './Aside3'
import Aside4 from './Aside4'

function Aside() {
    return (
        <>
            <aside className="right-menu col-4 p-0">
                <div className="aside-right">
                    <Aside1></Aside1>
                    <Aside2></Aside2>
                    <Aside3></Aside3>
                    <Aside4></Aside4>
                </div>
            </aside>
        </>
    )
}

export default Aside