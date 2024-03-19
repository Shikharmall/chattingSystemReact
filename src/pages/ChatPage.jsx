import React from 'react'

export default function ChatPage() {
  return (
    <div className='bg-[#a8bcff] w-[100vw] h-[100vh] flex justify-center items-center'>

        <div className='bg-white w-[70vw] h-[80vh] rounded-lg shadow-lg'>

            <div className='flex w-full h-full'>
                <div className='w-1/4 bg-[#3e3c62] h-[100%] rounded-l-lg flex flex-col'> 
                    <div className='p-3 flex bg-[#2f2c53] rounded-tl-lg'>
                        <p className='text-white text-opacity-90 font-semibold'>Chatting System</p>
                    </div>
                </div>
                <div className='w-3/4 h-full'> bye</div>
            </div>

        </div>
        
    </div>
  )
}
