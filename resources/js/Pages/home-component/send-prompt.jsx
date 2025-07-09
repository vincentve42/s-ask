import { router } from "@inertiajs/react";
import { useState } from "react";
import Disclaimer from './disclamer';
export default function SendPrompt()
{
    const [values, setValues] = useState({
        prompt : ""
    })
    function IsiBerubah(e)
    {
            const key = e.target.id;
            const value = e.target.value;
            setValues(values =>  ({
            ...values,
            [key]: value,
        }))
    }
    function SendForm(e)
    {
        e.preventDefault();
        
        router.post('/');
    }
    function OnFirstClick()
    {

    }
    return (
        <>
        <form onSubmit={SendForm} className="justify-self-center shadow-xs lg:mt-200 mt-130">
            <input id="prompt" placeholder="Ask here" type="text" className="mt-5 lg:rounded-4xl border border-gray-300 rounded-4xl lg:p-3 p-2 focus:rounded-4xl lg:w-128 focus:border-gray-300 w-96"/>
            <input type="submit" className="hidden"/>
        </form>
        
        </>
    )


}
