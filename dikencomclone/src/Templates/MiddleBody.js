import React from 'react'
import MiddleBodyLeft from './MiddleBodyLeft'
import MiddleBodyRight from './MiddleBodyRight'

function MiddleBody() {
    return (
        <>
            <div className="middle-main d-flex">
                <MiddleBodyLeft></MiddleBodyLeft>
                <MiddleBodyRight></MiddleBodyRight>
            </div>
        </>
    )
}

export default MiddleBody