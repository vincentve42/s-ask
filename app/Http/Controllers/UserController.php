<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class UserController extends Controller
{
    public function LoginPage()
    {
        $cek = session()->get('error');
        if(!$cek)
        {
            session()->put('error',"");
        }
        return Inertia::render('Login',['error' => session("error")]);
    }
    
    public function Login(Request $request)
    {
        $error = session()->get('error');
        $cek = $request->only('email','password');
        if(Auth::attempt($cek))
        {
            $request->session()->regenerate();
            
            return redirect()->route('PromptPage');
        }
        else
        {
            session()->put('error',"Password / Username anda salah");
            return redirect()->route('LoginPage');
        }
        
        
        
    }
    public function RegisterPage()
    {
        return inertia('Register');
    }
    public function Register(Request $request)
    {
        $request->validate([
            'email' => 'required|unique:users|email',
            'password' => 'required|min:8'
        ]);
        $new_user = new User;
        $new_user->email = $request->email;
        $new_user->name= "Regular User";
        $new_user->password = bcrypt($request->password);
        $new_user->save();

        return redirect()->route('LoginPage');
    }
}
