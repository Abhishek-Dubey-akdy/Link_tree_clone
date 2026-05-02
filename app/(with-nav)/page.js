"use client"
import { useEffect, useState, Suspense } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from "next/navigation";
import { OrbitProgress } from "react-loading-indicators";


function SearchComponent() {
  const searchParams = useSearchParams();
  const msg = searchParams.get("message");

  useEffect(() => {
    if (msg === "Login Required") {
      toast.error("login is required");
      window.history.replaceState({}, "", "/");
    }
  }, [msg])

  return <ToastContainer />;
}


export default function Home() {
  const [inputVal, setIinputVal] = useState("linktr.ee/")
  const [LastinputVal, setILastinputVal] = useState("linktr.ee/")

  const [index, setIndex] = useState(0)
  const [isTransitioning, setTransitioning] = useState(true)

  const images = ['/img1.webp', '/img2.jpg', '/img3.avif', '/img4.jpg', '/img5.jpg', '/img6.png']
  const itemHeight = 500
  const itemWidth = 375
  const dispayImages = [...images, images[0], images[1]]

  const [trust_index, setTrust_index] = useState(0)
  const [trust_transitioning, setTrust_transitioning] = useState(true)
  const trustedBy_arr = ['vlogger', 'retailers', 'wellness leaders', 'podcasters', 'merch sellers', 'writter', 'creator', 'influencers', 'athlets', 'monitizers', 'health educators']
  const trusted_itmes_height = 80
  const displayTrustedBy = [...trustedBy_arr, trustedBy_arr[0], trustedBy_arr[1]]


  const [page5Index, setpage5Index] = useState(0)
  const [isPage5Transitioning, setPage5transition] = useState(true)

  const Page5thDict = {
    1: ['/page5_0.webp', 90, 20, true],
    2: ['/page5_1.webp', 85, 125, false],
    3: ['/page5_2.webp', 120, 45, true],
    4: ['/page5_3.webp', 70, 15, false],
    5: ['/page5_4.webp', 120, 250, true],
    6: ['/page5_5.webp', 90, 150, false],
    7: ['/page5_6.webp', 110, 75, true],
  }

  const DisplayDict_5th = { ...Page5thDict, 8: Page5thDict[1], 9: Page5thDict[2], 10: Page5thDict[3], 11: Page5thDict[4] }
  const page5Item_width = 380


  const [FeaturedIndex, setFeaturedIndex] = useState(1)
  const [FeaturedTransitioning, setFeaturedTransitioning] = useState(false)

  const featuredDict = {
    A: {
      img: '/featured1.webp',
      tagLine: [`"Linktree simplifies the process for`, `creators to share multiple parts of`, `themselves in one inclusive link."`],
      name: "Riley Lemon,",
      job: "Youtuber, content creator"
    },
    B: {
      img: '/featured2.webp',
      tagLine: [`"Linktree helps my customers`, `get where they need to go. it's`, `fast and easy."`],
      name: "Patti Chimkire,",
      job: "Founder and Pastry Chef, mali Bakes"
    },
    C: {
      img: '/featured3.webp',
      tagLine: [`"I use Linktree's analytics to`, `better understand my`, `audience and what converts them."`],
      name: "Luke Kidgell,",
      job: "Comedian"
    }
  }

  const DisplayFeaturedDict = { O: featuredDict['C'], ...featuredDict, D: featuredDict['A'], }



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, 2000);

    const trust_timer = setInterval(() => {
      setTrust_index((prev) => prev + 1)
    }, 2000);

    const page5_timer = setInterval(() => {
      setpage5Index((prev) => prev + 1)
    }, 3000);

    return () => {
      clearInterval(timer)
      clearInterval(trust_timer)
      clearInterval(page5_timer)
    }
  }, [])


  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setTransitioning(false)
        setIndex(0)
      }, 1000)
    }
    else {
      if (!isTransitioning) {
        setTimeout(() => {
          setTransitioning(true)
        }, 100);
      }
      else {
        setTransitioning(true)
      }
    }
  }, [index, images.length])


  useEffect(() => {
    if (trust_index === trustedBy_arr.length) {
      setTimeout(() => {
        setTrust_transitioning(false)
        setTrust_index(0)
      }, 1000);
    }
    else {
      if (!trust_transitioning) {
        setTimeout(() => {
          setTrust_transitioning(true)
        }, 100);
      }
      else {
        setTrust_transitioning(true)
      }
    }
  }, [trust_index, trustedBy_arr.length])

  useEffect(() => {
    if (page5Index === Object.keys(Page5thDict).length) {
      setTimeout(() => {
        setPage5transition(false)
        setpage5Index(0)
      }, 1000);
    }
    else {
      if (!isPage5Transitioning) {
        setTimeout(() => {
          setPage5transition(true)
        }, 100);
      }
      else {
        setPage5transition(true)
      }
    }

  }, [page5Index])


  const [width, SetWidth] = useState(null)
  const [transition_Dir, setTransition_Dir] = useState(true)

  useEffect(() => {
    SetWidth(window.innerWidth)

    const handelResize = () => { SetWidth(window.innerWidth) };
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener('resize', handelResize);
    };
  }, []);


  useEffect(() => {
    if (width <= 1023) {
      setTransition_Dir(false)
    }
    else {
      setTransition_Dir(true)
    }
  }, [width])


  const handelChange = (e) => {
    if (e.target.value === "linktr.ee") {
      return
    }
    else {
      e.target.value = setIinputVal(e.target.value)
    }
  }

  const LastInputChange = (e) => {
    if (e.target.value === "linktr.ee") {
      return
    }
    else {
      e.target.value = setILastinputVal(e.target.value)
    }
  }


  const handelLeftClick = () => {
    let len = Object.keys(featuredDict).length

    setFeaturedTransitioning(true)
    setFeaturedIndex((prev) => prev - 1)

    if ((FeaturedIndex - 1) === 0) {
      setTimeout(() => {
        setFeaturedTransitioning(false)
        setFeaturedIndex(len)
      }, 500);
    }
  }


  const handelRightClick = () => {
    let len = Object.keys(featuredDict).length

    setFeaturedTransitioning(true)
    setFeaturedIndex((prev) => prev + 1)

    if (FeaturedIndex === len) {
      setTimeout(() => {
        setFeaturedTransitioning(false)
        setFeaturedIndex(1)
      }, 500);
    }
  }

  const [showfaqOne, setshowfaqOne] = useState(null)

  const handelFaq = (id) => {
    setshowfaqOne((prev) => prev == id ? null : id);
  }

  const FAQ = {
    Q1: {
      question: "Why should podcasters use Linktree?",
      ans: [
        "Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.",
        "A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once."
      ]
    },
    Q2: {
      question: "Is Linktree the original link in bio tool?",
      ans: [
        "The short answer? Yes!",
        "Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!"
      ]
    },
    Q3: {
      question: "Can you get paid and sell things from a Linktree?",
      ans: [
        "Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect revenue from affiliate links, and sell your products right in your Linktree. Monetisation features are only available for selected countries, see this Help Article for more.",
        "A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase.",
        `“We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany`
      ]
    },
    Q4: {
      question: "Is Linktree safe to use on all of my social media profiles?",
      ans: [
        "Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on."
      ]
    },
    Q5: {
      question: "What makes Linktree better than the other link in bio options?",
      ans: [
        "We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say:",
        `“Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman`,
        `It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T`,
        `”Websites are cool (I have one) but Linktrees just make it so much easier.” – Tan Nguyen`,
        `“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley Lemon`,
        `Linktree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!`
      ]
    },
    Q6: {
      question: "How can I drive more traffic to and through my Linktree?",
      ans: [
        "Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.",
        "Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!"
      ]
    },
    Q7: {
      question: "How many links should I have on my Linktree",
      ans: [
        "This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.",
        "That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.",
        "You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first."
      ]
    },
    Q8: {
      question: "Do I need a website to use Linktree?",
      ans: [
        "No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.",
        `“I hardly touch my website any more. I just send people to my Linktree! It’s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.” – @ashleyhopeperez`
      ]
    },
    Q9: {
      question: "Where can I download the app?",
      ans: ['Find it in the App Store, and in the Google Play store!']
    }
  }


  return (
    <>
    <Suspense fallback={<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><OrbitProgress color="#185a35" size="medium" text="" textColor="" /></div>}>
      <SearchComponent/>
    </Suspense>
      <main className="lg:h-[140vh] min-h-screen w-full bg-[#d2e823] lg:grid lg:grid-cols-2">
        <section className=" lg:ml-[5vw] flex flex-col justify-center items-center lg:items-start">
          <div className="lg:text-[70px] mt-[20vh] lg:mt-0 text-[35px] text-[#254f1a] leading-none font-extrabold flex flex-col gap-1">
            <span>A link in bio built</span>
            <span>for you.</span>
          </div>

          <div className="lg:text-lg w-[90%] text-[#254f1a] mt-5 font-semibold">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </div>

          <div className="mt-9 w-[90%] lg:w-full h-[10vh] lg:flex lg:gap-2 lg:items-center">
            <input className="h-[8vh] w-full block mb-4 lg:mb-0 lg:w-[40%] p-2 text-lg outline-[#d1cfcf] text-gray-600 font-bold bg-white rounded-md" type="text" onChange={(e) => handelChange(e)} value={inputVal} />
            <button disabled className="h-[8vh] w-[90%] mx-auto lg:mx-0 block disabled:cursor-not-allowed cursor-pointer lg:w-[40%] p-2 text-lg font-bold bg-[#254f1a] text-white rounded-full">Get Started for Free</button>
          </div>
        </section>



        <section className="h-[50vh] mt-[10vh] lg:mt-0 lg:h-[140vh] overflow-clip">
          <div className="flex items-center lg:flex-col"
            style={{
              transform: `${transition_Dir ? `translateY(-${index * itemHeight}px)` : `translateX(-${index * 100}%)`}`,
              transition: `${isTransitioning ? "transform 0.5s ease-in-out" : "none"}`
            }}>
            {dispayImages.map((src, i) => (
              <div key={i} className="lg:h-125 h-75 lg:w-[90%] w-full mx-auto p-4 rounded-lg shrink-0">
                <img className="h-full w-full object-cover rounded-lg" src={src} alt={`img${i}`} />
              </div>
            ))}
          </div>
        </section>
      </main>



      <div className="min-h-[105vh] bg-[#2665d6] flex flex-col-reverse lg:grid lg:grid-cols-2">
        <section className="flex items-center justify-center">
          <video className="lg:h-[80%] lg:pt-0 lg:pb-0 h-[80vh] lg:w-auto object-cover w-[95%]" autoPlay playsInline loop muted
            poster="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/692eb9b488731835c528bb18_capture_1764669836574.webp" >
            <source src="/customise_your_linktree.webm" type="video/webm" />
            <source src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="flex flex-col justify-center gap-10 lg:mr-3.5">
          <div className="lg:flex mt-[12vh] lg:mt-0 lg:flex-col mx-auto lg:mx-0 w-[80%] lg:w-full text-center lg:text-start lg:text-6xl text-3xl font-extrabold text-[#d2e823]">
            <span>Create and customize</span>
            <span> your Linktree in</span>
            <span> minutes</span>
          </div>
          <div className="font-bold w-[90%] lg:w-full mx-auto lg:mx-0 lg:text-lg text-white lg:flex lg:flex-col">
            <span>Connect all your content across social media, websites, stores and more in</span>
            <span> one link in bio. Customize every detail or let Linktree automatically enhance</span>
            <span> it to match your brand and drive more clicks.</span>
          </div>
          <button disabled className="h-[8vh] lg:w-[40%] w-[70%] mx-auto lg:mx-0 lg:p-2 p-4 lg:text-lg disabled:cursor-not-allowed font-semibold bg-[#d2e823] cursor-pointer rounded-full">Get Started for Free</button>
        </section>
      </div>



      <div className="h-[105vh] bg-[#780016] lg:grid lg:grid-cols-2">
        <section className="flex flex-col justify-center gap-10 lg:ml-[5vw]">
          <div className="lg:text-6xl text-3xl mt-[12vh] lg:mt-0 text-center lg:text-start font-extrabold text-[#e9c0e9]">Share your Linktree anywhere you like!</div>
          <div className="lg:flex lg:flex-col font-bold w-[90%] mx-auto lg:mx-0 text-[#f2ebf3]">
            <span>Add your unique Linktree URL to all the platforms and places you find your</span>
            <span>audience. Then use your QR code to drive your offline traffic back to your link in </span>
            <span>bio.</span>
          </div>
          <button disabled className="h-[8vh] lg:w-[40%] disabled:cursor-not-allowed w-[70%] mx-auto lg:mx-0 p-2 lg:text-lg font-semibold bg-[#e9c0e9] cursor-pointer rounded-full">Get Started for Free</button>
        </section>
        <section className="flex justify-center items-center">
          <video className="h-[80%] w-auto mix-blend-screen" autoPlay playsInline loop muted >
            <source src="/miai_bg.mp4" type="video/mp4" />
          </video>
        </section>
      </div>



      <div className="min-h-screen bg-[#e8efd6] flex flex-col-reverse lg:grid lg:grid-cols-2">
        <section className="h-full w-full flex justify-center items-center ">
          <img className="h-[80%] object-cover" src="/4thPageImg.avif" alt="4 page image" />
        </section>

        <section className="flex flex-col justify-center gap-8">
          <div className="flex flex-col mt-[12vh] lg:mt-0 w-[80%] mx-auto lg:mx-0 text-center lg:text-start lg:text-6xl text-3xl font-extrabold text-[#282828]">
            <span>Analyze your</span>
            <span>audience and keep</span>
            <span>them engaged</span>
          </div>
          <div className="lg:flex lg:flex-col lg:text-lg text-center lg:text-start w-[85%] mx-auto lg:mx-0 font-semibold text-[#282828]">
            <span>Track your engagement over time, monitor revenue and learn what's</span>
            <span> converting your audience. Make informed updates on the fly to keep them</span>
            <span> coming back.</span>
          </div>
          <button disabled className="h-[8vh] lg:w-[40%] disabled:cursor-not-allowed w-[70%] mx-auto lg:mx-0 p-2 lg:text-lg font-semibold bg-[#e9c0e9] cursor-pointer rounded-full">Get Started for Free</button>
        </section>
      </div>


      <div className="lg:h-[500vh] min-h-[400vh] bg-[#f3f3f1]">
        <section className="flex flex-col justify-center items-center">
          <span className="lg:text-6xl text-3xl text-center lg:text-start font-extrabold text-[#282828] mt-[20vh]">The only link in bio trusted by 70M+</span>


          <div className="flex justify-center items-start overflow-clip h-20 lg:w-150 w-full ">
            <div className="flex flex-col"
              style={{
                transform: `translateY(-${trust_index * trusted_itmes_height}px)`,
                transition: `${trust_transitioning ? "transform 0.5s ease-in-out" : "none"}`
              }}
            >
              {displayTrustedBy.map((item, i) => (
                <div className="text-center w-[99vw] lg:w-auto lg:text-6xl text-3xl font-extrabold h-20 text-[#2665d6]" key={i}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="overflow-clip lg:h-[55vh] h-62.5 w-full mt-[10vh]">
          <div className="flex gap-10 h-full w-full"
            style={{
              transform: `translateX(-${page5Index * page5Item_width + page5Index * 40}px)`,
              transition: `${isPage5Transitioning ? "transform 0.7s cubic-bezier(0.83,0,0.17,1)" : "none"}`
            }}
          >
            {Object.entries(DisplayDict_5th).map(([key, value]) => (
              <div key={key}
                className="h-full w-95 flex px-6 lg:px-0 justify-center shrink-0 lg:overflow-visible"
                style={{
                  alignItems: `${value[3] ? "start" : 'end'}`
                }}
              >
                <img className="h-[90%] object-cover max-w-none lg:shrink-0"
                  style={{
                    width: `${value[1]}%`,
                    borderRadius: `${value[2]}px`
                  }}
                  src={value[0]}
                  alt={`img${key}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="min-h-[125vh] lg:grid lg:grid-cols-2 mt-[8vh] lg:mx-[3vw]">
          <div className="flex flex-col">
            <div className="lg:h-1/2 bg-[#e9c0e9] m-3.75 lg:mr-0 lg:rounded-[30px] rounded-lg">
              <img className="h-[50%] w-[90%] mx-auto mt-[6%] object-contain" src="/3blockImg_2.avif" alt="photo2" />
              <p className="font-bold leading-none text-[#202020] lg:text-3xl text-xl p-4 py-6 lg:p-10">Share every type of content in limitless ways</p>
            </div>
            <div className="h-1/2 bg-[#d2e823] m-3.75 mb-0 lg:mb-3.75 mt-0 lg:mr-0 lg:not-open:rounded-[30px] rounded-lg">
              <img className="h-[55%] w-[90%] mt-[6%] mx-auto object-contain" src="/3blockImg_3.avif" alt="photo3" />
              <p className="font-bold text-[#202020] lg:text-3xl text-xl p-4 py-6 lg:p-10">Sell products, collect payments ad make monetization simple</p>
            </div>
          </div>
          <div className="bg-[#061492] m-3.75 lg:rounded-[30px] rounded-lg">
            <img className="h-[85%] w-[80%] mx-auto object-contain" src="/3blockImg_1.avif" alt="photo1" />
            <p className="text-white font-bold lg:text-3xl text-xl p-10 py-2.5">Grow, own and engage your audience across all of your channels</p>
          </div>
        </section>


        <section className="h-[40vh] w-[90%] mx-auto lg:mx-0 lg:w-full mt-[10vh] flex flex-col items-center justify-around">
          <h1 className="font-extrabold text-[#202020] lg:text-[60px] text-[37px] text-center lg:items-center lg:justify-center leading-none lg:gap-1 lg:flex lg:flex-col">
            <span>The fast, friendly and</span>
            <span> powerful link in bio tool.</span>
          </h1>
          <button disabled className="h-[8vh] w-75 p-2 text-lg disabled:cursor-not-allowed font-semibold bg-[#e9c0e9] cursor-pointer rounded-full">Explore all plans</button>
        </section>


        <section className="h-[40vh] mt-[27vh] flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-[#202020] lg:text-[60px] text-[35px]">As featured in...</h1>

          <div className="flex flex-col mt-3 h-[60%] w-full">
            <div className="flex m-2 h-1/2 lg:gap-5 gap-2 justify-center items-center">
              <div className="bg-white h-[80%] flex justify-center items-center rounded-[35px] lg:w-[20%] w-[25%]">
                <img className="lg:w-[45%] w-[90%] object-contain" src="/featuredLogo1.avif" alt="phot01" />
              </div>
              <div className="bg-white h-[80%] flex justify-center items-center rounded-[35px] lg:w-[20%] w-[30%]">
                <img className="lg:w-[20%] w-[40%] object-contain" src="/featuredLogo2.avif" alt="phot02" />
              </div>
              <div className="bg-white h-[80%] flex justify-center items-center rounded-[35px] lg:w-[20%] w-[30%]">
                <img className="lg:w-[25%] w-[50%] object-contain" src="/featuredLogo3.avif" alt="phot03" />
              </div>
            </div>
            <div className="flex m-2 h-1/2 gap-5 justify-center">
              <div className="bg-white h-[80%] flex justify-center items-center rounded-[35px] lg:w-[20%] w-[30%]">
                <img className="lg:w-[35%] w-[70%] object-contain" src="/featuredLogo4.avif" alt="phot04" />
              </div>
              <div className="bg-white h-[80%] flex justify-center items-center rounded-[35px] lg:w-[20%] w-[30%]">
                <img className="lg:w-[35%] w-[70%] object-contain" src="/featuredLogo5.avif" alt="phot05" />
              </div>
            </div>
          </div>
        </section>


        <section className="lg:h-[109vh] h-[85vh] mt-[8vh] overflow-clip">

          <div className="flex h-full w-full"
            style={{
              transform: `translateX(-${FeaturedIndex * 100}%)`,
              transition: `${FeaturedTransitioning ? "transform 0.5s cubic-bezier(0.16,1,0.3,1)" : "none"}`
            }}
          >
            {Object.entries(DisplayFeaturedDict).map(([key, value]) => (

              <div key={key} className="flex flex-col shrink-0 items-center justify-around h-full w-full">
                <div className="lg:w-[55%] w-[90%] lg:h-[52%] rounded-full">
                  <img className="h-full w-full object-cover" src={value["img"]} alt={`img ${key}`} />
                </div>

                <h1 className="lg:flex lg:flex-col text-center lg:gap-2 leading-none text-[#2b2b2b] lg:text-[48px] text-[32px] font-extrabold lg:w-[57%] w-[90%]">
                  <span>{value["tagLine"][0]}</span>
                  <span> {value["tagLine"][1]}</span>
                  <span> {value["tagLine"][2]}</span>
                </h1>

                <div className="flex flex-col gap-2 w-full items-center">
                  <h2 className="text-center leading-none text-[#484747] lg:text-xl font-semibold w-[57%]">{value["name"]}</h2>
                  <h3 className="text-center leading-none text-[#484747] lg:text-xl font-semibold w-[57%]">{value["job"]}</h3>
                </div>
              </div>
            ))}
          </div>

        </section>


        <section className="h-12.5 w-full flex justify-center items-center gap-4">
          <button onClick={handelLeftClick} className="border h-12.5 w-12.5 hover:transition-colors hover:duration-300 hover:bg-[#e4e4e4] rounded-lg p-3 cursor-pointer">
            <img className="h-full w-full object-contain" src="/arrow-left-double-stroke-rounded.svg" alt="left arrow" />
          </button>
          <button onClick={handelRightClick} className="border h-12.5 w-12.5 hover:transition-colors hover:duration-300 hover:bg-[#e4e4e4] rounded-lg p-2 cursor-pointer">
            <img src="/arrow-right-double-stroke-rounded.svg" alt="right arrow" />
          </button>
        </section>
        <div className="h-12.5 w-full"></div>
      </div>

      <div className="lg:min-h-[220vh] min-h-screen pb-5 bg-[#780016]">

        <h1 className="lg:pt-[15vh] pt-[5vh] lg:text-[60px] text-[36px] leading-none text-[#e9c0e9] font-extrabold text-center">Questions? Answered</h1>

        <section className="min-h-[80%] w-full flex flex-col gap-5 mt-[5vh]">

          {Object.entries(FAQ).map(([key, value]) => (
            <div key={key} className="lg:min-h-30 min-h-25 lg:w-[65%] w-[90%] mx-auto rounded-[30px] bg-[#51000e]">
              <div onClick={() => handelFaq(key)} className="flex justify-between items-center lg:h-30 h-25 cursor-pointer w-full lg:px-10 px-3 lg:pt-4">
                <h2 className="lg:text-[28px] text-[20px] text-[#e9c0e9] font-bold">{value["question"]}</h2>
                <img className="invert" src="/arrow-down-01-stroke-rounded.svg" alt="down arrow" />
              </div>

              <div className={`grid transition-all duration-350 ease-in-out ${showfaqOne == key ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="pt-0 lg:px-10 px-3 pb-6 flex flex-col gap-3">
                    {value["ans"].map((para, i) => (
                      <p key={i} className="lg:text-[19px] text-[15px] text-[#e9c0e9] font-semibold">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="h-12.5 w-full"></div>
      </div>

      <div className="min-h-[220vh] overflow-clip pb-5 bg-[#502274] relative">
        <img className="z-5 lg:h-[120vh] h-[60vh] top-[20vh] lg:top-0 absolute lg:rotate-25 rotate-15 lg:left-25" src="blue_boy.svg" alt="boy logo" />
        <img className="z-5 lg:h-[90vh] h-[45vh] top-[50vh] absolute -right-37.5 lg:bottom-[70vh]" src="/pink_bush.svg" alt="pink bush" />


        <section className="z-10 w-full relative min-h-[30vh] lg:pt-[40vh] pt-[20vh] pb-[20vh] lg:pb-[40vh] flex flex-col items-center">
          <h1 className="lg:text-6xl text-[35px] leading-none font-extrabold text-center lg:w-full w-[90%] text-[#e9c0e9]">Jumpstart your corner of the internet today</h1>

          <div className="lg:flex h-[15vh] w-full lg:gap-2 lg:justify-center lg:items-center">
            <input className="h-[8vh] block lg:w-[20%] w-[90%] mx-auto lg:mx-0 p-2 text-lg mt-6 lg:mt-0 outline-[#d1cfcf] text-gray-600 font-bold bg-white rounded-md" type="text" onChange={(e) => LastInputChange(e)} value={LastinputVal} />
            <button disabled className="h-[8vh] block disabled:cursor-not-allowed cursor-pointer lg:w-[20%] w-[50%] mx-auto lg:mx-0 mt-3 lg:mt-0 p-2 text-lg font-bold bg-[#d2e823] text-[#2b2b2b] rounded-full">Claim your linktree</button>
          </div>
        </section>

        <section className="z-10 relative w-full min-h-[90vh] flex justify-center ">
          <div className="h-full w-[90%] lg:p-15 p-5 bg-white rounded-2xl flex flex-col justify-between">
            <div className="h-[75%] w-full lg:grid lg:grid-cols-4 ">
              <div className=" flex flex-col lg:gap-4 gap-2">
                <h2 className="font-bold text-2xl text-[#2b2b2b]">Company</h2>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">The Linktree Blog</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Engineering Blog</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Marketplace</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">What's New</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">About</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Press</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Careers</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Link in Bio</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Social Good</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Contact</p>
              </div>
              <div className="flex flex-col mt-6.25 lg:mt-0 lg:gap-4 gap-2">
                <h2 className="font-bold text-2xl text-[#2b2b2b]">Community</h2>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Linktree for Enterprise</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">2023 Creator Report</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">2022 Creator Report</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Charities</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Creator Profile Directory</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Explore Templates</p>
              </div>
              <div className="flex flex-col mt-6.25 lg:mt-0 lg:gap-4 gap-2">
                <h2 className="font-bold text-2xl text-[#2b2b2b]">Support</h2>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Help Topics</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Getting Started</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Linktree Pro</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Features & How-Tos</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">FAQs</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Report a Violation</p>
              </div>
              <div className="flex flex-col mt-6.25 lg:mt-0 lg:gap-4 gap-2">
                <h2 className="font-bold text-2xl text-[#2b2b2b]">Trust & Legal</h2>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Terms & Conditions</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Privacy Notice</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Cookie Notice</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Trust Center</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Cookies Preferences</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Transparency Report</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Law Enforcement Access Policy</p>
                <p className="text-sm font-semibold text-[#4f4d4d] cursor-pointer">Human Rights</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:h-16 min-h-16 justify-between lg:items-center mt-[5vh] overflow-clip">
              <div className="flex flex-col lg:flex-row gap-3 lg:items-center mt-5 lg:mt-0">
                <button disabled className='bg-[#eff0ec] h-15 w-fit cursor-pointer disabled:cursor-not-allowed p-4 px-6 font-bold hover:bg-[#ebede4] rounded-lg'>Log In</button>
                <button disabled className="h-15 w-57.5 cursor-pointer disabled:cursor-not-allowed p-2 text-lg font-semibold bg-[#d2e823] text-[#2b2b2b] rounded-full">Get Started for Free</button>
              </div>

              <div className="flex gap-2 items-center h-16 mt-5 lg:mt-0">
                <div className="lg:w-37.5 w-18.75 lg:h-full h-[70%] bg-[#1e2330] rounded-full flex justify-center items-center cursor-pointer"><img className="p-2 object-fit w-[80%]" src="/appleLogo.png" alt="apple logo" /></div>
                <div className="lg:w-37.5 w-18.75 lg:h-full h-[70%] bg-[#1e2330] rounded-full flex justify-center items-center cursor-pointer"><img className="p-2 object-fit w-[80%]" src="/GoogleLogo.png" alt="google logo" /></div>
                <div className="lg:h-16 h-8 w-8 lg:w-16 bg-[#1e2330] rounded-full flex justify-center items-center hover:bg-[#393c46] cursor-pointer"><img className="invert" src="/tree-01-stroke-rounded.svg" alt="linkTree logo" /></div>
                <div className="lg:h-16 h-8 w-8 lg:w-16 bg-[#1e2330] rounded-full flex justify-center items-center hover:bg-[#393c46] cursor-pointer"><img className="invert" src="/at-stroke-rounded.svg" alt="@ logo" /></div>
                <div className="lg:h-16 h-8 w-8 lg:w-16 bg-[#1e2330] rounded-full flex justify-center items-center hover:bg-[#393c46] cursor-pointer"><img className="invert" src="/tiktok-stroke-rounded.svg" alt="tiktok logo" /></div>
                <div className="lg:h-16 h-8 w-8 lg:w-16 bg-[#1e2330] rounded-full flex justify-center items-center hover:bg-[#393c46] cursor-pointer"><img className="invert" src="/instagram-stroke-rounded.svg" alt="instagram" /></div>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full min-h-[30vh] mt-15 flex flex-col gap-6 justify-between p-4">
          <div className="flex gap-9 justify-center items-center">
            <img src="/RedFlag.svg" alt="red flag" />
            <img src="/GreenFlag.svg" alt="green flag" />
          </div>
          <div className="w-[90%] mx-auto text-center text-[#e9c0e9] text-lg font-semibold">
            <h2 className="text-sm lg:text-[18px]">We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville St, Collingwood VIC 3066</h2>
          </div>
        </section>
      </div>

    </>);
}
