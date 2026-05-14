import React from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'

const Sidebar = () => {

    const actions = [
        {
            id: 1,
            actionName: "New Chat",
            func: undefined
        },
        {
            id: 2,
            actionName: "Search Chat",
            func: undefined
        }
    ]

    const chatHistory = [
        {
            id: 1,
            title: "Tell me about yourself",
        },
        {
            id: 2,
            title: "How does AI work?",
        },
        {
            id: 3,
            title: "Write a JavaScript countdown timer",
        },
        {
            id: 4,
            title: "Best way to learn React in 2026",
        },
        {
            id: 5,
            title: "Create a dark mode login page UI",
        },
        {
            id: 6,
            title: "Explain quantum computing simply",
        },
        {
            id: 7,
            title: "Generate a professional resume summary",
        },
        {
            id: 8,
            title: "What are some startup ideas for students?",
        },
        {
            id: 9,
            title: "Fix my Tailwind CSS layout issue",
        },
        {
            id: 10,
            title: "Suggest names for my AI chatbot",
        },
        {
            id: 11,
            title: "How to connect MongoDB with Node.js",
        },
        {
            id: 12,
            title: "Make a modern navbar with React",
        },
        {
            id: 13,
            title: "Write a Python script for file sorting",
        },
        {
            id: 14,
            title: "Tell me a sci-fi story in 100 words",
        },
        {
            id: 15,
            title: "Best VS Code extensions for developers",
        },
        {
            id: 16,
            title: "Explain async and await in JavaScript",
        },
        {
            id: 17,
            title: "Generate dummy user profile data",
        },
        {
            id: 18,
            title: "How to deploy a Next.js app",
        },
        {
            id: 19,
            title: "Create a glassmorphism card design",
        },
        {
            id: 20,
            title: "Difference between SQL and NoSQL",
        },
        {
            id: 21,
            title: "Write Instagram captions for travel photos",
        },
        {
            id: 22,
            title: "How to improve coding logic fast",
        },
        {
            id: 23,
            title: "Generate random product descriptions",
        },
        {
            id: 24,
            title: "Create a chatbot landing page hero section",
        },
        {
            id: 25,
            title: "Tips for preparing for coding interviews",
        },
    ];

    return (
        <aside className='flex flex-col h-screen bg-card w-65 border border-border relative'>

            {/* Head of the Sidebar */}
            <div id='head' className='flex gap-2 justify-between text-2xl px-4 py-6'>
                <span>Chat Clone</span>
                <span className='relative top-4 mx-0 flex-1 border h-0 w-0'></span>
            </div>
            <div id='actions' className='flex px-3 py-2 flex-col gap-2 mb-0'>
                {
                    actions.map((action) => {
                        return (
                            <button key={action.id} className='w-full px-3 py-2 text-left hover:bg-primary hover:text-primary-foreground transition-transform durations-100 rounded-2xl cursor-pointer active:scale-95 text-bold' onClick={action.func}>
                                {action.actionName}
                            </button>)
                    })
                }
            </div>

            {/* Chat History */}
            <div id='chat-history' className='flex flex-col overflow-x-auto h-full px-3 pb-4 mt-4 w-full' style={{
                boxShadow: "inset 0px -12px 12px -12px rgba(0, 0, 0, 0.1)"
            }}>
                <div id='chat-history-head' className='sticky top-0 flex px-3 pb-2 items-center bg-card'>
                    <span>Chat history</span>
                    <span className='relative top-0 mx-2 flex-1 border h-0 w-0'></span>
                </div>
                <div id='history' className='flex flex-col justify-center w-fit gap-3 pt-2 text-sm'>
                    {
                        chatHistory.map((chat) => {
                            return (
                                <button className='px-3 py-2 w-55 hover:bg-secondary transition-transform duration-100 rounded-sm overflow-hidden cursor-pointer text-left active:scale-95 truncate'>
                                    {chat.title}
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            {/* Toggle Theme Button */}
            {/* <div id='theme-toggle' className='flex relative bottom-0 px-5 py-4 w-full border justify-end'>
                <ThemeToggle className='flex gap-2 px-3 py-2 btn-primary text-primary-foreground active:scale-95 cursor-pointer justify-center' />
            </div> */}

            {/* User Profile */}
            <div id='user-profile' className='relative flex bottom-0 px-5 py-4 w-full border text-center gap-2'>
                <div className='w-1/5 h-full'>
                    <div id='icon' className='bg-accent h-10 w-10 rounded-full'></div>
                </div>
                <span className='flex flex-1 flex-col w-4/5 items-start'>
                    <span id='name' className='text-sm'>Soumya Mishra</span>
                    <span id='name' className='w-full truncate text-sm'>soumyamishra2099@gmail.com</span>
                </span>
            </div>

        </aside>
    )
}

export default Sidebar
