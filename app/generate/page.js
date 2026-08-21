"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, setUrl] = useState('')
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setUrl("")
    setshorturl("")
    console.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));
  }
  

  
  return (
    <div className='mx-auto w-[40vw] my-21 p-7 rounded-lg flex flex-col gap-12 justify-center items-center'>     
      <h1 className='font-bold text-3xl'>Generate your short URLs</h1>
      <div className='flex flex-col w-full gap-7'>
        <input type="text"
        value={url}
        className='w-full p-1 rounded-lg border-2 border-purple-400 focus:outline-none'
        placeholder='Enter Your URL'
        onChange={(e)=>{setUrl(e.target.value)}} />

        <input type="text"
        value={shorturl}
        className='w-full p-1 rounded-lg border-2 border-purple-400 focus:outline-none'
        placeholder='Enter Your preferred short URL' 
        onChange={(e)=>{setshorturl(e.target.value)}} />
        <div className='w-full flex justify-center items-center'>
          <button onClick={generate} className='p-2 bg-purple-400 w-fit rounded-full px-6 border-2 border-purple-800'>Genarate</button>
        </div>
        {generated && <><span className='font-bold text-lg py-2 px-5 rounded-xl ring-1 ring-violet-500 w-fit'>Your Links:</span> <code><Link target="_blank" href={generated}>{generated}</Link> 
          </code></>}
      </div>
    </div>
  )
}

export default Shorten
