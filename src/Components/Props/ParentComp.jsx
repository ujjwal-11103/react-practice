import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = ({ data2 }) => {
    return (
        <div>
            <h1>Hello from Paarent</h1>

            <ChildComp data="Ujjwal" dataGpVal={data2} />
        </div>
    )
}

export default ParentComp
