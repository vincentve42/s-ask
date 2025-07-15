import Logo from './home-component/logo';
import SendPrompt from './home-component/send-prompt';
import GuestNavbar from './home-component/navbar-guest';
import Disclamer from './home-component/disclamer';
import { usePage } from '@inertiajs/react';
import { useState, useEffect,  useRef } from 'react';

export default function GuestHome()
{
    const {data} = usePage().props
    const [chat, setChat] = useState([]);
    const promptref = useRef(null)
    function LoadData()
        {
             const result = [];
            for(const key in data)
            {
                console.log(data[key].prompt)
                console.log(data[key].response)
                result.push({
                    prompt : data[key].prompt,
                    response :data[key].response})

                setChat(result);
            }
        }
     useEffect(() => {
        if (data) {
            LoadData();
        }
        promptref.current?.scrollIntoView({ behavior: "smooth" })
    }, [data]);
    
    return(
        <>
        
        
            
            <GuestNavbar></GuestNavbar>
            
            <div>
                <div className='lg:h-190 h-130 overflow-auto'>
                 
                    
                   {chat && chat.map((item) => (
                        <div className=''>
                            <div className='justify-self-end p-3 max-w-48 lg:max-w-64 bg-gray-100 rounded-2xl mr-10'>
                                <p>{item.prompt}</p>
                            </div>
                            <div className='ml-10 justify-self-start p-3 max-w-48 lg:max-w-64 bg-gray-100 rounded-2xl'>
                                <p>{item.response}</p>
                            </div>
                            <div ref={promptref}/>
                        </div>
                   )

                   )}
                    
                </div>
            </div>
            <div>

            
                <SendPrompt></SendPrompt>
                <Disclamer/>
                
            </div>
        
        </>
    )
}
