import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Disclaimer from './disclamer';
export default function SendPrompt()
{
    const [values, setValues] = useState({
        prompt : ""
    })
    const {errors} = usePage().props;
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
        e.preventDefault()
        router.post('/',{
            prompt: values.prompt,
        });
    }
    function OnFirstClick()
    {

    }
    return (
        <>
        <form onSubmit={SendForm} className="justify-self-center shadow-xs static lg:top-200 top-150">
            <input id="prompt" placeholder="Ask here" type="text" value={values.prompt} onChange={IsiBerubah} className="mt-5 lg:rounded-4xl border border-gray-300 rounded-4xl lg:p-3 p-2 focus:rounded-4xl lg:w-128 focus:border-gray-300 w-96"/>
            {
                <ul>
                    <li>{errors.prompt}</li>
                </ul>
            }
            <input type="submit" name="" className="hidden" />
        </form>
        
        </>
    )


}
