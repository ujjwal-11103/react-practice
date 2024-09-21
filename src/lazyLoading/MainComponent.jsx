import React, { useState } from 'react'
import { Suspense } from 'react'

const LazyComp = React.lazy(() => import('./SlowComponent'))


const MainComponent = () => {

    return (
        <div>

            <h1>Helo throttle to 3G to see effect</h1>

            <Suspense fallback={<div><h1>Loading Slow Component wait ...</h1></div>}>
                <LazyComp />
            </Suspense>


        </div>
    )
}

export default MainComponent
