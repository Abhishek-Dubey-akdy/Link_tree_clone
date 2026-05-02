import React from 'react'
import { auth } from '@/auth'
import LinkForm from '@/components/LinkForm';

const dashboard = async () => {
    const session = await auth();

    if (!session) return <><div>You are not logged in.</div></>
    
    return (
        <div className="min-h-screen text-white w-screen bg-[url('/Gemini_Gen_bg.png')] bg-cover bg-center">

            <div className='w-[90%] lg:w-1/2 flex flex-col gap-4 items-center mx-auto pt-[15vh] lg:pt-[20vh]'>
                <img
                    src={session.user?.image}
                    alt="Profile"
                    className="w-25 h-25 object-contain rounded-full"
                />
                <h1 className='text-xl lg:text-2xl text-white font-bold lg:font-semibold'>Welcome, {session.user?.name}</h1>
                <p className='text-lg text-white font-bold lg:font-semibold'>Email: {session.user?.email}</p>
            </div>

            <LinkForm user={session.user}></LinkForm>

        </div>
    )
}

export default dashboard
