'use client'

import ThemeToggle from '@/components/ThemeToggle'
import WarningFooter from '@/components/WarningFooter';
import { PlusIcon, SendHorizontalIcon } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

const page = () => {

  const [prompt, setPrompt] = useState<string>("");
  const promptInput = useRef<HTMLTextAreaElement | null>(null);
  const time = new Date().getHours();
  const router = useRouter()

  useEffect(() => {

    const promptElement = promptInput.current;

    if (!promptElement) return;

    promptElement.style.height = '0px';
    promptElement.style.height = String(promptElement.scrollHeight) + 'px';

  }, [prompt])


  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value)

  }

  const handleSubmit = () => {

  }


  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }

  }

  return (
    <div id='new-chat' className='flex flex-col h-full'>

      {/* Header */}
      <header className='flex items-center h-18 px-5 border-b justify-between'>
        <h2 className='text-2xl'>
          New Chat
        </h2>

        <span>
          <ThemeToggle className='btn-primary text-sm px-2 py-2 cursor-pointer active:scale-95' />
        </span>
      </header>

      {/* Chat View */}
      <div className='relative flex flex-1 h-full flex-col items-center overflow-y-auto'>

        {/* Chat Container */}
        <div id='chat-container' className='flex flex-col flex-1 w-full md:max-w-200 pt-10 mb-60 min-h-full text-[15px]'>

          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          <div className='flex justify-end w-full'>
            <span className='px-4 py-3 rounded-2xl bg-accent'>

              Hey!
            </span>
          </div>
          <div className='flex h-fit w-full text-foreground'>
            <span className='px-4 py-3'>

              Hey wassup
            </span>
          </div>
          
          

        </div>

        {/* Input Field */}
        <div className='sticky flex items-center gap-3 py-4 h-fit flex-col bottom-0 w-full'>
          <div id='input-field' className='flex flex-col gap-5 px-2 rounded-2xl py-4 h-fit w-200 bg-accent text-accent-foreground'>
            <textarea ref={promptInput} id='prompt' onKeyDown={handleKeyDown} onChange={handleOnChange} placeholder='Write anything...' className='w-full max-h-80 outline-0 resize-none px-3 py-2' value={prompt} />
            <div id='actions' className='flex justify-between w-full'>
              <button className='text-muted-foreground px-3 py-3 active:scale-95 cursor-pointer rounded-2xl hover:bg-muted'>
                <PlusIcon />
              </button>
              <button onClick={handleSubmit} className='bg-foreground text-background px-3 py-3 active:scale-95 cursor-pointer rounded-2xl'>
                <SendHorizontalIcon />
              </button>
            </div>
          </div>

          {/* Warning Foooter */}
          <WarningFooter />
        </div>


      </div>


    </div>
  )
}

export default page
