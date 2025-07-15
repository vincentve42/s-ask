import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
export default function RegisterPage()
{
    const props = usePage().props
    const { errors } = usePage().props
    const [values, setValues] = useState({
            email : "",
            password : ""
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
            router.post('/register', {
                
                email: values.email,
                password: values.password,
               

            })
               
        }

    return (
    <>
        <head>
            
        </head>

       
            <nav className="lg:mt-0 mt-10">
                <h1 className="font-bold text-2xl lg:p-5 lg:justify-self-start justify-self-center">S-Ask</h1>
            </nav>
            <form onSubmit={SendForm}>
                <div>
                    <div className="lg:mt-5 lg:mt-3 lg:mt-10">
                        <h1 className="justify-self-center text-3xl font-bold">Register</h1>
                    </div>   
                    
                    <div className="justify-self-center">
                        <input type="text" placeholder="Email Address" id="email" value={values.email} onChange={IsiBerubah} className="mt-5 p-2 pl-4 rounded-4xl focus:rounded-4xl border hover:border-blue-500 focus:border-blue-500 lg:w-82"/>
                    </div>
                    <div className="justify-self-center">
                        <input type="password" placeholder="Password" id="password" value={values.password} onChange={IsiBerubah} className="mt-5 p-2 pl-4 rounded-4xl focus:rounded-4xl border hover:border-blue-500 focus:border-blue-500 lg:w-82"/>
                    </div>
                   {
                    <ul className="text-red-500 text-xs justify-self-center mt-2">
                        <li>{errors.email}</li>
                        <li>{errors.password}</li>
                    </ul>
                   }
                    <div className="justify-self-center lg:w-82 w-52 lg:mt-5 mt-5 ">
                        <button type="submit" className="text-center lg:w-82 w-52 bg-black rounded-4xl text-white p-4 w-full">Register</button>
                    </div>
                    
                    <div className="pt-5 flex justify-center">
                        <p>Have An Account?</p><a href="/login"><p className="pl-1 text-blue-500">Sign in</p></a>
                    </div>
                </div>
            </form>
               
        </>
  )
}