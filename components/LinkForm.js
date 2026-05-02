"use client"
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const LinkForm = ({ user }) => {
    const [links, setlinks] = useState([{ link: "", link_tag: "" }]);
    const [handel, sethandel] = useState("")


    const handelChange = (index, link, link_tag) => {
        setlinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, link_tag };
                }
                else {
                    return item;
                }
            })
        })
    }

    const addLink = () => {
        setlinks(links.concat({ "link": "", "link_tag": "" }));
    }

    const addTree = async () => {
        let isLinkMissing = links.some(obj => !obj["link"] || !obj["link_tag"]);

        if (!user?.email || !user?.image || !handel) {
            toast.error("some fields are missing");
            return;
        }

        if (isLinkMissing) {
            toast.error("some links are empty fill them");
            return;
        }

        else {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "link": links,
                "email": user?.email,
                "handel": handel,
                "pic": user?.image
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            let r = await fetch("/api/add", requestOptions);
            const result = await r.json();

            if (result.success) {
                toast.success(result.msg);
                setlinks([{ link: "", link_tag: "" }])
            }
            else {
                toast.error(result.msg)
            }

        }

    }

    return (
        <div className='bg-[#6fc590] w-[90%] lg:w-[60%] rounded-xl mx-auto lg:min-h-[45vh] max-h-[50vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-scroll mb-2.5'>
            <div>
                <h1 className='text-xl lg:text-2xl font-bold m-2.5'>Form To add link</h1>
            </div>
            <div className='m-2.5'>
                <h1 className='lg:text-lg '>Enter Your Handel Name: </h1>
                <input value={handel} onChange={(e) => sethandel(e.target.value)} className='border-2 p-1 lg:p-2 outline-0 rounded-lg w-75 lg:w-87.5' placeholder='handel' type="text" />
            </div>
            <h1 className='lg:text-lg m-2.5'>Enter the Links you want to add: </h1>
            {links && links.map((item, index) => {
                return <div key={index} className='flex flex-col lg:flex-row gap-4 m-2.5'>
                    <input value={item.link_tag || ""} onChange={(e) => handelChange(index, item.link, e.target.value)} className='border-2 p-1 lg:p-2 outline-0 rounded-lg w-[60%] lg:w-75' placeholder='link title' type="text" />
                    <input value={item.link || ""} onChange={(e) => handelChange(index, e.target.value, item.link_tag)} className='border-2 p-1 lg:p-2 outline-0 rounded-lg w-[60%] lg:w-75' placeholder='link' type="text" />
                </div>
            })}
            <button onClick={addLink} className='bg-[#c260ad] p-2 rounded-lg m-2.5'>add link</button>
            <div className='m-2.5'>
                <button onClick={addTree} className='bg-[#c260ad] p-2 rounded-lg'>create a link tree</button>
            </div>

            <div><ToastContainer /></div>
        </div>
    )
}

export default LinkForm
