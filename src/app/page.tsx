"use client"

import ThemeToggle from '@/components/ThemeToggle';
import { useEffect, useState, useRef } from 'react'
import { SendHorizontalIcon } from 'lucide-react';
import Image from 'next/image';
import { PlusIcon } from 'lucide-react';

const page = () => {

  const [prompt, setPrompt] = useState<string>("");
  const promptInput = useRef<HTMLTextAreaElement | null>(null);
  const time = new Date().getHours();

  const handleOnChange = (event: any) => {
    setPrompt(event.target.value);
  }

  useEffect(() => {

    const promptEle = promptInput.current;

    if (!promptEle) return;

    promptEle.style.height = "0px";
    promptEle.style.height = String(promptEle.scrollHeight) + 'px';;
  }, [prompt])



  return (
    <div id='new-chat' className='h-full'>

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

      <div className='flex flex-col h-full items-center justify-start gap-10'>
        <div id='filler' className='flex w-full justify-center items-end text-4xl h-55'>
          <div className='flex gap-10 items-center'>
            <span id='logo'><Image src={'/logo.png'} width={60} height={60} alt='logo' /></span>
            {
              5 <= time && time < 12 && "Good Morning, Soumya" ||
              12 <= time && time < 17 && "After Noon, Soumya" ||
              17 <= time && time < 20 && "Good Evening, Soumya" ||
              "What are you working on?"
            }
          </div>
        </div>
        <div className='flex flex-col gap-5 px-2 rounded-2xl py-4 h-fit w-1/2 bg-accent text-accent-foreground'>
          <textarea ref={promptInput} id='prompt' onChange={handleOnChange} placeholder='How can I help you today?' className='w-full max-h-80 outline-0 resize-none px-3 py-2' value={prompt} />
          <div id='actions' className='flex justify-between w-full'>
            <button className='text-muted-foreground px-3 py-3 active:scale-95 cursor-pointer rounded-full hover:bg-muted'>
              <PlusIcon />
            </button>
            <button className='bg-foreground text-background px-3 py-3 active:scale-95 cursor-pointer rounded-full'>
              <SendHorizontalIcon />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
