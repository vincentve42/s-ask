<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PromptController extends Controller
{
    public function PromptPage()
    {
        if(!Auth::user())
        {
            return inertia('GuestHome');
        }
        else
        {
            
        }
    }
}
