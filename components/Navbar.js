"use client"
import React, { useState, useRef, useEffect } from 'react'
import { signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const [products, setProducts] = useState(false)
    const [learn, setLearn] = useState(false)
    const timeoutRef = useRef(null)
    let prev = null

    const handelEnter = (state_name) => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            if (prev === "products" && state_name === "learn") setProducts(false)
            if (prev === "learn" && state_name === "products") setLearn(false)
        }

        if (state_name === "products") setProducts(true)
        else if (state_name === "learn") setLearn(true)
    }

    const handelLeave = (state_name) => {
        prev = state_name
        timeoutRef.current = setTimeout(() => {
            if (state_name === "products") setProducts(false)
            else if (state_name === "learn") setLearn(false)
        }, 250)
    }

    const [HideNav, setHideNav] = useState(false)
    const [translatePercent, setTranslatePercent] = useState(0)



    const [width, SetWidth] = useState(null)
    const [navImg, setNavImg] = useState("/LinkTreeLogo.svg")



    useEffect(() => {
        let referenceScrollY = window.scrollY;
        const tenPercent = window.innerHeight * 0.1;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            const TotalScrolled = currentScrollY - referenceScrollY

            if (TotalScrolled >= tenPercent * 2) {
                setHideNav(true)
                setTranslatePercent(-200)
                referenceScrollY = currentScrollY;
            } else if (TotalScrolled <= -tenPercent) {
                setHideNav(false)
                setTranslatePercent(0)
                referenceScrollY = currentScrollY;
            }
        };


        window.addEventListener('scroll', handleScroll);



        SetWidth(window.innerWidth)

        const handelResize = () => { SetWidth(window.innerWidth) };
        window.addEventListener("resize", handelResize);


        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handelResize);
        };
    }, []);

    useEffect(() => {
        if (width <= 640) {
            setNavImg('/at-stroke-rounded.svg')
        }
        else {
            setNavImg("/LinkTreeLogo.svg")
        }
    }, [width])





    return (
        <>
            <nav className='flex z-20 justify-between items-center h-[8vh] w-[90vw] mx-auto fixed lg:top-[7.6vh] top-[3vh] left-[5vw] bg-white lg:py-10 lg:px-5 px-3 rounded-full'
                style={{
                    transform: `translateY(${translatePercent}%)`,
                    transition: `transform 0.5s ease-in-out`
                }}
            >
                <div className='flex items-center gap-10'>
                    <Link href="/">
                        <div className='flex justify-center items-center h-15 w-15 lg:h-30 lg:w-30'><img className='cursor-pointer object-contain' src={navImg} alt="logo" /></div>
                    </Link>
                    <ul className='hidden lg:visible lg:flex lg:gap-1 text-lg'>
                        <li onMouseEnter={() => handelEnter("products")} onMouseLeave={() => handelLeave("products")} className='p-2 px-3 cursor-pointer hover:bg-[#eff0ec] rounded-sm'>Products</li>
                        <li className='p-2 px-3 cursor-pointer hover:bg-[#eff0ec] rounded-sm'>templates</li>
                        <li className='p-2 px-3 cursor-pointer hover:bg-[#eff0ec] rounded-sm'>Marketplace</li>
                        <li onMouseEnter={() => handelEnter("learn")} onMouseLeave={() => handelLeave("learn")} className='p-2 px-3 cursor-pointer hover:bg-[#eff0ec] rounded-sm'>Learn</li>
                        <li className='p-2 px-3 cursor-pointer hover:bg-[#e9fbb5] rounded-sm'><Link href={"/dashboard"}>Dashboard</Link></li>
                    </ul>
                </div>
                <div className='flex gap-4 '>
                    <button onClick={async () => await signIn("google", { redirectTo: "/dashboard" })} className='bg-[#212634] cursor-pointer p-2.5 text-white hover:bg-[#2d3341] font-bold lg:p-4 rounded-full'>Sign In</button>
                    <button onClick={async () => await signOut({ redirectTo: "/" })} className='bg-[#eff0ec] cursor-pointer p-2.5 lg:p-4 font-bold hover:bg-[#ebede4] rounded-lg'>Sign out</button>
                    <button className='cursor-pointer lg:hidden hover:bg-[#2d3341] rounded-full'><Link href={"/dashboard"}><img src="/menu-01-stroke-rounded.svg" className='h-[70%] object-contain' alt="menu" /></Link></button>
                </div>
            </nav>


            {/* this is the product section's dropdown*/}
            <section onMouseEnter={() => handelEnter("products")} onMouseLeave={() => handelLeave("products")} className={` ${products ? "" : "hidden"} ${HideNav ? "hidden" : ""} z-20 bg-white h-[60vh] w-[80vw] p-3 rounded-2xl grid grid-cols-3 fixed top-[20vh] left-[10vw]`}>
                <div className='flex flex-col gap-1'>
                    <div className='p-2 hover:bg-[#eff0ec] flex justify-between m-1 text-lg rounded-lg cursor-pointer'>
                        <div className='flex gap-2'>
                            <div className=''><img src="/link-04-stroke-rounded.svg" alt="link" /></div>
                            <div>Link in bio + tool</div>
                        </div>
                        <div>
                            <img src="/arrow-right-01-stroke-rounded.svg" alt="arrow" />
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#eff0ec] flex justify-between m-1 text-lg rounded-lg cursor-pointer'>
                        <div className='flex gap-2 '>
                            <div className=''><img src="/arrange-stroke-rounded.svg" alt="manage" /></div>
                            <div>manage your social media</div>
                        </div>
                        <div>
                            <img src="/arrow-right-01-stroke-rounded.svg" alt="arrow" />
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#eff0ec] flex justify-between m-1 text-lg rounded-lg cursor-pointer'>
                        <div className='flex gap-2 '>
                            <div className=''><img src="/user-group-stroke-rounded.svg" alt="users" /></div>
                            <div>Grow and engage your audience</div>
                        </div>
                        <div>
                            <img src="/arrow-right-01-stroke-rounded.svg" alt="arrow" />
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#eff0ec] flex justify-between m-1 text-lg rounded-lg cursor-pointer'>
                        <div className='flex gap-2 '>
                            <div className=''><img src="/dollar-circle-stroke-rounded.svg" alt="dollar" /></div>
                            <div>Monetize your following</div>
                        </div>
                        <div>
                            <img src="/arrow-right-01-stroke-rounded.svg" alt="arrow" />
                        </div>
                    </div>

                    <div className='p-2 hover:bg-[#eff0ec] flex justify-between m-1 text-lg rounded-lg cursor-pointer'>
                        <div className='flex gap-2 '>
                            <div className=''><img src="/chart-up-stroke-rounded.svg" alt="chart" /></div>
                            <div>Measure your success</div>
                        </div>
                        <div>
                            <img src="/arrow-right-01-stroke-rounded.svg" alt="arrow" />
                        </div>
                    </div>
                </div>


                <div className='border-r border-l border-l-[#a8a5a5] border-r-[#a8a5a5] flex flex-col gap-1'>
                    <div className='flex flex-col hover:bg-[#eff0ec] m-1 p-2 rounded-lg'>
                        <span className='text-sm'>Link in bio</span>
                        <span className='text-[12px] text-gray-700'>Customize your Linktree</span>
                    </div>

                    <div className='flex flex-col hover:bg-[#eff0ec] m-1 p-2 rounded-lg cursor-pointer'>
                        <span className='text-sm'>Link shortener</span>
                        <span className='text-[12px] text-gray-700'>Create trackable, shareable short links</span>
                    </div>

                    <div className='flex flex-col hover:bg-[#eff0ec] m-1 p-2 rounded-lg cursor-pointer'>
                        <span className='text-sm'>QR code generator</span>
                        <span className='text-[12px] text-gray-700'>Turn links into scannable QR codes</span>
                    </div>

                    <div className='flex flex-col hover:bg-[#eff0ec] m-1 p-2 rounded-lg cursor-pointer'>
                        <span className='text-sm'>Canva Background Editor</span>
                        <span className='text-[12px] text-gray-700'>Import your custom designs from Canva into your profile</span>
                    </div>

                    <div className='h-[0.5px] w-[95%] mx-auto mb-1.5 bg-[#a8a5a5]'></div>

                    <div className='flex flex-col m-1 p-2 cursor-default'>
                        <span className='text-sm'>Linktree for every social platform</span>
                        <span className='text-[12px] text-gray-700'>Grow and engage your audience everywhere</span>
                    </div>

                    <div className='flex gap-4 m-1 mx-2 cursor-default'>
                        <img className='p-2 rounded-lg cursor-pointer bg-[#eff0ec] hover:invert' src="/instagram-stroke-rounded.svg" alt="insta" />
                        <img className='p-2 rounded-lg cursor-pointer bg-[#eff0ec] hover:invert' src="/tiktok-stroke-rounded.svg" alt="tiktok" />
                        <img className='p-2 rounded-lg cursor-pointer bg-[#eff0ec] hover:invert' src="/linkedin-02-stroke-rounded.svg" alt="linkdin" />
                        <img className='p-2 rounded-lg cursor-pointer bg-[#eff0ec] hover:invert' src="/new-twitter-stroke-rounded.svg" alt="X" />
                    </div>
                </div>


                <div className='flex flex-col'>
                    <span className='m-1 p-2 text-lg'>Featured</span>
                    <img className='w-[95%] mx-auto' src="/linktree_product_Img.avif" alt="product" />
                    <span className='mx-1 px-2 pt-2'>Join 70M+ using Linktree as their link in bio</span>
                    <span className='mx-1 px-2 text-sm text-gray-700'>One link to share everything you create, curate, and sell across all your socials.</span>
                </div>
            </section>


            {/* this is the learn section's dropdown*/}
            <section onMouseEnter={() => handelEnter("learn")} onMouseLeave={() => handelLeave("learn")} className={` ${learn ? "" : "hidden"} ${HideNav ? "hidden" : ""} h-[50vh] z-20 bg-white w-[80vw] p-3 rounded-2xl grid grid-cols-3 fixed top-[20vh] left-[10vw]`}>
                <div>
                    <div className='p-2 hover:bg-[#eff0ec] flex justify-between m-1 text-lg rounded-lg cursor-pointer'>
                        <div className='flex gap-2'>
                            <div className=''><img src="/dashboard-square-01-stroke-rounded.svg" alt="Resources" /></div>
                            <div>Resources</div>
                        </div>
                        <div>
                            <img src="/arrow-right-01-stroke-rounded.svg" alt="arrow" />
                        </div>
                    </div>


                    <div className='p-2 hover:bg-[#eff0ec] flex justify-between m-1 text-lg rounded-lg cursor-pointer'>
                        <div className='flex gap-2'>
                            <div className=''><img src="/help-circle-stroke-rounded.svg" alt="How" /></div>
                            <div>How to use Linktree</div>
                        </div>
                        <div>
                            <img src="/arrow-right-01-stroke-rounded.svg" alt="arrow" />
                        </div>
                    </div>

                </div>



                <div className='border-r border-l border-l-[#a8a5a5] border-r-[#a8a5a5] flex flex-col gap-1'>
                    <div className='flex flex-col hover:bg-[#eff0ec] m-1 p-2 rounded-lg cursor-pointer'>
                        <span>Read our blog</span>
                        <span className='text-sm text-gray-700'>All the latest tips, tricks and growth strategies</span>
                    </div>

                    <div className='flex flex-col hover:bg-[#eff0ec] m-1 p-2 rounded-lg cursor-pointer'>
                        <span>Success Stories</span>
                        <span className='text-sm text-gray-700'>Real people, real results on Linktree</span>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span className='m-1 p-2'>Learn with Linktree</span>
                    <img className='h-[50%] mx-auto' src="/linktree_learn.avif" alt="product" />
                    <span className='mx-1 px-2 pt-2 text-sm'>Create & sell your own online Course</span>
                    <span className='mx-1 px-2 text-[12px] text-gray-700'>If you’ve got something to share, you’ve got something to sell. Easily create and share an online course that...</span>
                </div>

            </section>
        </>
    )
}

export default Navbar
