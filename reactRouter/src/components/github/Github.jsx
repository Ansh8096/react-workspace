import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

// loading the github data using 'useEffect'...    
//     let [data, setData] = useState({});
//    useEffect(()=>{
//     fetch(`https://api.github.com/users/Ansh8096`)
//     .then(res => res.json())
//     .then(res =>  setData(res));
//    }, [])

    // loading the github data using 'loader'...
    const data = useLoaderData(); // 'useLoaderData()' allows us to use the params from the loader...  

    return (
        <>
        <div className='bg-gray-700 text-white text-center text-4xl py-4 m-4 '>
            Github Followers: {data.followers}
            <img  src={data.avatar_url} alt="github pic" width={300} height={400}/>

        </div>
        </>
    )
}

export default Github

// exporting the method that fetches the github data
// this method will be used by the loader...
export const GithubInfoLoader = async ()=>{
    const response = await fetch(`https://api.github.com/users/Ansh8096`); // here 'response' is promise...
    return response.json(); 
}