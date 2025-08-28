import moment from 'moment';
import Logo from './home-component/logo';
import SendPrompt from './home-component/send-prompt';
import { router, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Disclamer from './home-component/disclamer';


export default function Home()
{

    
    const {chat,data} = usePage().props;
    const [nav,setNav] = useState(false);
    const [kecil,setKecil] = useState(false);
    const [search,useSearch] = useState(false);
    const promptref = useRef(null)
    const [date]= useState("");
    const [sc,setSc] = useState('')
    const [mobilesearch,useMobileSearch] = useState(null)
    
    console.log(chat);
    const ChatPage = () =>{
        
    }
    
     useEffect(() => {
            promptref.current?.scrollIntoView({ behavior: "smooth" })
        },[data])
     const handleclick = (id) => router.post("/chat/", {
       chat : id
     });
     const handleLogout = () => router.get('/logout');
    
    return(
        <>
            <div className={` top-50 ml-100 shadow-2xl rounded-4xl fixed w-156 ${search ? "opacity-100" : "opacity-0"}`}>
                <div className='flex justify-between p-5 border-b border-gray-300'>

                   

                    
                        <input type="text" placeholder='Search Chats' onChange={(e) =>setSc(e.target.value)}  className='w-132 text-xl focus:outline-0'/>
                        <svg onClick={() => useSearch(!search)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                   
                    

                </div>
            
                <div className='h-64 overflow-auto'>
                    <ul>
                    {chat && chat.filter((item) => {
                        return sc.toLowerCase() === '' ? item : item.judul.toLowerCase().includes(sc)
                    }).map((item, index) => (
                        
                        <>
                       {index === 0 || 
                            moment(item.updated_at).format("LL") !== moment(chat[index - 1].updated_at).format("LL")
                        ? <p className='pl-7 pt-2 text-gray-400'>{moment(item.updated_at).format("LL")}</p>
                        : null}
                        
                        <div onClick={() => handleclick(item.id)}  className='ml-5 mt-2 flex p-2 hover:bg-gray-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<button key={chat.id} ><li className='pl-5' >{item.judul}</li></button>
                        </div>
                        </>
                   ))}
                   </ul>
                </div>
            </div>
            
            <nav className={`fixed top-0 left-0 z-999 w-8 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-100 border-r border-gray-200 ${kecil ? "opacity-100" : "opacity-0"}`}>
                <ul className='pt-5'>
                    <li onClick={() => setKecil(!kecil)} className='justify-self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                </svg>
                </li>
                <li onClick={() => (handleclick(0))} className='justify-self-center pt-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                </li>
                <li onClick={() => useSearch(!search)} className='justify-self-center pt-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg></li>
                <li>
                    <svg onClick={() => handleLogout()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </li>
                </ul>
            </nav>
            <nav className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-100 ${kecil ? "opacity-0" : "opacity-100"}`}>
                <ul>
                    <div className='flex items-center justify-items-center justify-between ml-5 mt-3 mr-2'>
                        <svg onClick={() => handleLogout()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                            </svg>
                        <button onClick={() => setKecil(!kecil)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg></button>


                    </div>
                <div className='flex items-center justify-items-center ml-5 mt-10'>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                    <button onClick={() => handleclick(0)}><li className='ml-1 text-sm/6'>New chats</li></button>
                </div>
                
                <div className='flex items-center justify-items-center ml-5 mt-3' onClick={() => useSearch(!search)}>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                    <li className='ml-1 text-sm/6'>Search chats</li>
                </div>
                <div>
                    <li className=' ml-5 mt-5 text-gray-500'>Chats</li>
                </div>
                
                   {chat && chat.map((chat) => (
                        <div key={chat} className='ml-5 mt-2'>
                            <button key={chat.id} onClick={() => handleclick(chat.id)}><li >{chat.judul}</li></button>
                        </div>
                   ))}
                
                </ul>
            </nav>
            <div className={`flex justify-between items-center justify-items-center  ${nav ? "opacity-0" : "opacity-100"}`}>
                    <div className={`text-xl font-bold ${kecil ? "p-10 pl-15 pt-5" : "p-5"}`}>
                        
                    </div>
                    <div className='mr-3 lg:hidden pt-3'>
                        <button onClick={() => setNav(!nav)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className={`top-0  bg-white shadow-xl w-64 fixed font-semibold h-full  ${nav ? "opacity-100 z-999" : "opacity-0 z-0"}`}>
                    <ul>
                       <div className='flex justify-between'>
                            <svg onClick={() => handleLogout()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-2 mt-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                            </svg>
                            <button  onClick={() => setNav(!nav)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-2 mt-5 text-gray-300 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg></button>
                       </div>
                       <div className="pointer-events-auto">
                        
                        <button onClick={() => handleclick(0)}><div className='flex justify-start ml-5 mt-10'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                           <p>New Chat</p>
                            
                        </div>
                        </button>
                        <div className='ml-3'>
                       <input type="text" onChange={(e) => setSc(e.target.value)} value={sc} placeholder='Search Here' className='border-b border-gray-300 focus:outline-0 ml-2 w-32 text-gray-300'/>
                       </div>
                        <div className='flex mt-5 ml-5 items-center justify-items-center'>
                            

                            <p className='text-gray-300'>Chat</p>
                        </div>
                             {chat && chat.filter((item) => {
                                return sc.toLowerCase() === '' ? item : item.judul.toLowerCase().includes(sc)
                             })
                             .map((item,index) => (
                                <>
                             {index === 0 || 
                            moment(item.updated_at).format("LL") !== moment(chat[index - 1].updated_at).format("LL")
                        ? <p className='pl-7 pt-2 text-gray-400'>{moment(item.updated_at).format("LL")}</p>
                        : null}
                            <div key={item} className='ml-5 mt-1'>
                                <button key={item.id}  onClick={() => handleclick(item.id)}><li className='font-semibold' >{item.judul}</li></button>
                            </div>
                            </>
                    ))}
                       </div>
                              
                    </ul>
            </div>
            <div className={`overflow-auto pt-5 pr-2 h-110 lg:h-200 ${nav ? "opacity-0" : "opacity-100"} ${search ? "" : ""}`}> 
                
                 {data && data.map((item) => (
                            <div key={item.id} className=''>
                                <div className={`justify-self-end p-3 max-w-48 lg:max-w-64 bg-gray-100 rounded-2xl  ${kecil ? "lg:mr-10" : "lg:mr-5"}`}>
                                    <p className='text-black lg:text-base text-sm '>{item.prompt} </p>
                                </div>
                                <div className={`justify-self-start ml-2 p-3 max-w-48 lg:max-w-64 ${kecil ? "lg:ml-35" : "lg:ml-70"}`}>
                                    <p className='text-black'>{item.response}</p>
                                </div>
                                
                                <div ref={promptref}/>
                                
                            </div>
                           
                                
                           
                        
                        ))}
            </div >
            
            <div ></div>
            <div>

            
                <SendPrompt></SendPrompt>
                <Disclamer/>
            </div>
        
        </>
    )
}
