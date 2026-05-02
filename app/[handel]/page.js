import React from 'react'
import clientPromise from '@/lib/mongodb'
import { notFound } from 'next/navigation'

const slug = async ({ params }) => {
    const handel = (await params).handel;
    const client = await clientPromise;
    const db = client.db("Linktree")
    const collection = db.collection("links")

    const doc = await collection.findOne({ handel: handel })

    if (!doc) {
        return notFound();
    }

    return (
        <div className='min-h-screen w-full bg-[#1f2626] text-white'>
            <div className='w-full lg:w-1/2 flex flex-col gap-3 p-[13vh] items-center mx-auto'>
                <img className='h-25 w-25 object-contain rounded-full' src={doc.pic} alt="email photo" />
                <h1 className='text-2xl font-bold mb-[3vh]'>{doc.handel}</h1>

                {doc.link && doc.link.map((item, i) => {
                    return <div key={i}>
                        <div><a target="_blank" rel="noopener noreferrer" className='h-12.5 w-[65vw] lg:w-[50vw] bg-[linear-gradient(45deg,#f3ec78,#af4261)]  text-lg font-semibold rounded-xl flex justify-center items-center' href={item.link}>{item.link_tag}</a></div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default slug
