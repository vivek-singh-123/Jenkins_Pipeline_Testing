import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/vivek-singh-123`)  
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)     
    //     })
    // }, [])

  return (
    <div className='text-4xl bg-gray-500 p-8 text-white m-10'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/vivek-singh-123`)  //another way
    return response.json()
}