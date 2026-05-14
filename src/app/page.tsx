"use client"

import React, { ChangeEvent, useState } from 'react'

const page = () => {

  const [prompt, setPrompt] = useState<string>("");

  const handleOnChange = (event: any) => {
    setPrompt(event.target.value);
  }
  return (
    <div id='new-chat' className='h-full'>

      {/* Header */}
      <header className='flex items-center h-20 px-5 border-b justify-between'>
        <h2 className='text-2xl'>
          New Chat
        </h2>

        <span>
          <button className='btn-primary text-sm px-3 py-2 cursor-pointer active:scale-95'>
            Get Plus
          </button>
        </span>
      </header>

      {/* Chat View */}

      <div className='flex flex-col h-full items-center gap-20'>
        <div id='filler' className='flex w-full justify-center items-end text-3xl h-70'>
          What are you working on?
        </div>
        <div className='flex w-full justify-center items-center h-fit'>
          <input onChange={handleOnChange} type="text" placeholder='Ask Anything' className='h-18 w-2/3 px-5 pr-23 py-1 bg-accent rounded-2xl outline-0' value={prompt} />
          <button className='relative -left-19 h-fit bg-foreground text-background rounded px-3 py-2 active:scale-95 cursor-pointer'>Send</button>
        </div>
      </div>

    </div>
  )
}

export default page
