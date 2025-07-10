<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function LoginPage()
    {
        return inertia('Login');
    }
    
    public function Login(Request $request)
    {
        $cek = $request->only('email','password');
        if(Auth::attempt($cek))
        {
            $request->session()->regenerate();
            return to_route('PromptPage');
        }
        else
        {
                
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

        return to_route('LoginPage');
    }
}
