import Logo from './home-component/logo';
import SendPrompt from './home-component/send-prompt';
import GuestNavbar from './home-component/navbar-guest';
import Disclamer from './home-component/disclamer';
import { usePage } from '@inertiajs/react';

export default function Home()
{
    const {data} = usePage().props;
    return(
        <>
       
            
            <GuestNavbar></GuestNavbar>
            <div className="overflow-auto h-200">
                 {data && data.map((item) => (
                            <div key={item.id} className=''>
                                <div className='justify-self-end p-3 max-w-48 lg:max-w-64 bg-gray-100 rounded-2xl mr-2'>
                                    <p className='text-black lg:text-base text-sm '>{item.prompt}</p>
                                </div>
                                <div className='justify-self-start ml-2 p-3 max-w-48 lg:max-w-64'>
                                    <p className='text-black'>{item.response}</p>
                                </div>
                            </div>
                        
                        ))}
            </div>
            <div>

            
                <SendPrompt></SendPrompt>
                <Disclamer/>
            </div>
        
        </>
    )
}
