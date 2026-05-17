'use client'

import ThemeToggle from '@/components/ThemeToggle'
import WarningFooter from '@/components/WarningFooter';
import { PlusIcon, SendHorizontalIcon } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


interface SessionHistory {
  id: number;
  role: "assistant" | "user";
  content: string
  reasoning?: string;
}


const page = () => {

  const [prompt, setPrompt] = useState<string>("");
  const promptInput = useRef<HTMLTextAreaElement | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false)
  const time = new Date().getHours();
  const router = useRouter();
  
  const [sessionChats, setSessionCHats] = useState(() => {
    
    if (typeof window === undefined) return [];
    return (JSON.parse(localStorage.getItem("chatHistory") ?? "[]") as SessionHistory[])
    
  })
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
    
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value)

  }

  const handleSubmit = () => {

    if (!prompt.trim()) return;
    let query = prompt
    setPrompt("");

    let chatEle: SessionHistory = {
      id: sessionChats.length + 1,
      role: 'user',
      content: prompt
    }

    if (!sessionChats) return;
    setSessionCHats(prev => [...prev, chatEle]);

    setIsGenerating(true)
    fetch("/api/communicate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          prompt: [...sessionChats, chatEle]
        }
      )
    }).then(res => res.json())
      .then(res => {
        if (res.success) {

          console.log(res)
          setSessionCHats(prev => [...prev, res.data.response.choices[0].message])
          setIsGenerating(false)
        } else {
          console.log("An error occured")
        }
      })

  }

  useEffect(() => {

    const promptElement = promptInput.current;

    if (!promptElement) return;

    promptElement.style.height = '0px';
    promptElement.style.height = String(promptElement.scrollHeight) + 'px';

  }, [prompt])

  useEffect(() => {

    if (sessionChats === undefined) {
      localStorage.setItem("chatHistory", '[]');
    } else {
      localStorage.setItem("chatHistory", JSON.stringify(sessionChats))
    }

  }, [sessionChats])

  // useEffect(() => {

  //   if (!isGenerating) return;

  //   let aiEle = {
  //     id: sessionChats.length + 1,
  //     role: 'assistant',
  //     content: "How can I help you?"
  //   }

  //   setSessionCHats(prev => [...sessionChats, aiEle]);

  // }, [isGenerating])


  return (
    <div id='new-chat' className='flex flex-col h-full'>

      {/* Header */}
      <header className='flex justify-between items-center px-5 border-b h-18'>
        <h2 className='text-2xl'>
          New Chat
        </h2>

        <span>
          <ThemeToggle className='px-2 py-2 text-sm active:scale-95 cursor-pointer btn-primary' />
        </span>
      </header>

      {/* Chat View */}
      <div className='relative flex flex-col flex-1 items-center h-full overflow-y-auto'>

        {/* Chat Container */}
        <div id='chat-container' className='flex flex-col flex-1 gap-3 mb-30 pt-10 w-full md:max-w-200 text-[15px]'>

          {sessionChats.map(chat => {

            if (chat.role === 'user') {

              return (
                <div key={chat.id} className='flex justify-end w-full'>
                  <span className='bg-accent px-3 py-2 rounded-2xl'>
                    {chat.content}
                  </span>
                </div>
              )
            } else if (chat.role === 'assistant') {

              return (
                <div key={chat.id} className='flex w-full h-fit text-foreground'>
                  <span className='prose-invert px-4 py-3 max-w-none prose'>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                      {chat.content}
                    </ReactMarkdown>
                  </span>
                </div>
              )
            }

          })}


        </div>

        {/* Input Field */}
        <div className='bottom-0 sticky flex flex-col items-center pt-4 w-full h-fit'>
          <div id='input-field' className='flex flex-col gap-5 bg-accent px-2 py-4 rounded-2xl w-200 h-fit text-accent-foreground'>
            <textarea ref={promptInput} id='prompt' onKeyDown={handleKeyDown} onChange={handleOnChange} placeholder='Write anything...' className='px-3 py-2 outline-0 w-full max-h-80 resize-none' value={prompt} />
            <div id='actions' className='flex justify-between w-full'>
              <button className='hover:bg-muted px-3 py-3 rounded-2xl text-muted-foreground active:scale-95 cursor-pointer'>
                <PlusIcon />
              </button>
              <button onClick={handleSubmit} className='bg-foreground px-3 py-3 rounded-2xl text-background active:scale-95 cursor-pointer'>
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
