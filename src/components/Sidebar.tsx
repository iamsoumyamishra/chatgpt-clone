import React from 'react'
import ThemeToggle from './ThemeToggle'

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

    return (
        <aside className='flex flex-col h-screen bg-card min-w-80 border border-border relative'>
            {/* <ThemeToggle /> */}

            <div id='head' className='flex gap-2 justify-between text-2xl px-4 py-6'>
                <span>Chat Clone</span>
            </div>
            <div id='actions' className='flex px-3 py-4 flex-col gap-2'>
                {
                    actions.map((action) => {
                        return (
                            <button key={action.id} className='w-full px-3 py-2 btn-primary-foreground btn-primary' onClick={action.func}>
                                {action.actionName}
                            </button>)
                    })
                }
            </div>
            <div id='theme-toggle' className='absolute bottom-0 px-5 py-4 w-full border text-center'>
                <ThemeToggle className='px-3 py-2 btn-primary text-primary-foreground active:scale-95 cursor-pointer w-50' />
            </div>
        </aside>
    )
}

export default Sidebar
