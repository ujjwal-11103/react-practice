import React, { useState } from 'react';
import useFetch from './useFetch';

const FetchGithubUser = () => {
    const [userId, setUserId] = useState('');
    const [url, setUrl] = useState('');
    const [show, setShow] = useState(false);

    // Only fetch when `url` is set after clicking the "Submit" button
    const { data, loading, error } = useFetch(url);

    const handleClick = () => {
        if (userId) {
            setUrl(`https://api.github.com/users/${userId}`);
            setShow(true);
        }
    };

    return (
        <div className='flex justify-center items-center flex-col gap-5'>
            <h1 className='text-center'>Github user info</h1>

            {show && !loading && (
                <p>{data ? data.name : 'User not found'}</p>
            )}

            {loading && <p>Loading...</p>}
            {error && <p>Error fetching user data Reason = {error}</p>}

            <input
                type="text"
                placeholder="Enter GitHub Username"
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default FetchGithubUser;
