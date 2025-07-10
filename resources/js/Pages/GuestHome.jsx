import Logo from './home-component/logo';
import SendPrompt from './home-component/send-prompt';
import GuestNavbar from './home-component/navbar-guest';
import Disclamer from './home-component/disclamer';

export default function GuestHome()
{
    
    return(
        <>
        
        
            
            <GuestNavbar></GuestNavbar>
            <div>
                <div>
                   
                       
                    
                </div>
            </div>
            <div>

            
                <SendPrompt></SendPrompt>
                <Disclamer/>
            </div>
        
        </>
    )
}
