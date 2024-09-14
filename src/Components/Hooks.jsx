import React, { useEffect, useState } from 'react'

const Hooks = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {
        console.log(count);
    }, [])


    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-center text-2xl'>useState Hook Example</h1>
            <p className='mb-8'> {count}</p>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleClick}>Dark</button>
        </div>
    )
}

export default Hooks
