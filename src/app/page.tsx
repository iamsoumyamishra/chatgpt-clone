"use client"

import ThemeToggle from '@/components/ThemeToggle';
import React, { ChangeEvent, useState } from 'react'
import { SendHorizontalIcon } from 'lucide-react';

const page = () => {

  const [prompt, setPrompt] = useState<string>("");

  const handleOnChange = (event: any) => {
    setPrompt(event.target.value);
  }
  return (
    <div id='new-chat' className='h-full'>

      {/* Header */}
      <header className='flex items-center h-18 px-5 border-b justify-between'>
        <h2 className='text-2xl'>
          New Chat
        </h2>

        <span>
          {/* <button className='btn-primary text-sm px-3 py-2 cursor-pointer active:scale-95'>
            Get Plus
          </button> */}
          <ThemeToggle className='btn-primary text-sm px-2 py-2 cursor-pointer active:scale-95' />
        </span>
      </header>

      {/* Chat View */}

      <div className='flex flex-col h-full items-center gap-15'>
        <div id='filler' className='flex w-full justify-center items-end text-3xl h-80'>
          What are you working on?
        </div>
        <div className='flex w-full justify-center items-center h-fit'>
          <input onChange={handleOnChange} type="text" placeholder='Ask Anything' className='h-16 w-1/2 pl-10 pr-23 py-1 bg-accent rounded-3xl outline-0' value={prompt} />
          <button className='relative -left-16 h-fit bg-foreground text-background px-3 py-3 active:scale-95 cursor-pointer rounded-full'>
            <SendHorizontalIcon />
          </button>
        </div>
      </div>

    </div>
  )
}

export default page
