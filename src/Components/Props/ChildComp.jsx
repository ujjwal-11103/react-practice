import React from 'react'

const ChildComp = ({ data, dataGpVal }) => {
    return (
        <div>
            <h1>Hi from CHild</h1>
            <h2>Data from Parent in Child Comp = {data}</h2>
            <h2>Data from Grand Parent in Child Comp = {dataGpVal}</h2>
        </div>
    )
}

export default ChildComp
