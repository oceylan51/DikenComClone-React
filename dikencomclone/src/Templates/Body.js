import React from 'react'
import BottomBody from './BottomBody'
import MiddleBody from './MiddleBody'
import TopBody from './TopBody'

function Body() {
    return (
        <>
            <main className="container bg-white p-0 col-8">
                <TopBody></TopBody>
                <MiddleBody></MiddleBody>
                <BottomBody></BottomBody>
            </main>
        </>
    )
}

export default Body