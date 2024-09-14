import React from 'react'
import ParentComp from './ParentComp'

const GrandParent = () => {
    const dataGP = "GP"
    return (
        <div>
            <h1>Hello From Grand parent</h1>
            <ParentComp data2={dataGP} />
        </div>
    )
}

export default GrandParent
