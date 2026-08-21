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
    <div className='mx-auto w-full max-w-lg my-10 md:my-21 p-4 sm:p-7 rounded-lg flex flex-col gap-8 md:gap-12 justify-center items-center'>     
      <h1 className='font-bold text-2xl sm:text-3xl text-center'>Generate your short URLs</h1>
      <div className='flex flex-col w-full gap-5 sm:gap-7'>
        <input 
          type="text"
          value={url}
          className='w-full p-2 sm:p-1 rounded-lg border-2 border-purple-400 focus:outline-none'
          placeholder='Enter Your URL'
          onChange={(e)=>{setUrl(e.target.value)}} 
        />

        <input 
          type="text"
          value={shorturl}
          className='w-full p-2 sm:p-1 rounded-lg border-2 border-purple-400 focus:outline-none'
          placeholder='Enter Your preferred short URL' 
          onChange={(e)=>{setshorturl(e.target.value)}} 
        />
        
        <div className='w-full flex justify-center items-center'>
          <button onClick={generate} className='p-2 bg-purple-400 w-fit rounded-full px-6 border-2 border-purple-800 cursor-pointer'>Genarate</button>
        </div>

        {generated && (
          <div className='flex flex-col sm:flex-row items-center gap-2 w-full justify-center text-center break-all'>
            <span className='font-bold text-lg py-2 px-5 rounded-xl ring-1 ring-violet-500 w-fit shrink-0'>Your Links:</span> 
            <code className='break-all'>
              <Link target="_blank" href={generated} className="text-purple-600 underline">{generated}</Link> 
            </code>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shorten
