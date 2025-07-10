<?php

namespace App\Http\Controllers;

use App\Models\chat;
use App\Models\prompt_chat;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;


class PromptController extends Controller
{
    
    public function PromptPage()
    {
        if(!Auth::user())
        {
            
            return Inertia::render('GuestHome',[]);
        }
        else
        {
            $pageid = session()->get('chat-id');
            if(!$pageid)
            {
                
                 return Inertia::render('DefaultHome');
            }
            else
            {
                $id_page = chat::where('prompt_chat_id',$pageid)->get();
                

                return Inertia::render('DefaultHome',['data' => $id_page]);            
            }
            
            
        }
    }
    public function SendPrompt(Request $request)
    {
        
        
        $request->validate([
            'prompt' => 'required'
        ]);
        

    
        if(Auth::user())
        {
            $cek_pertama_kali = session()->get('firsttimeuse');
            if(!$cek_pertama_kali)
            {
                session()->put('firsttimeuse', 1);
                $prompt_new_chat = new prompt_chat;
                $prompt_new_chat->judul = $request->prompt;
                $prompt_new_chat->user()->associate(Auth::user()->id);
                
                
                try
                {
                    $prompt_new_chat->save();
                    try{
                            $prompt = new chat;
                            $prompt->prompt=$request->prompt;
                            $prompt_new_chat->response = 'Testing aja gapunya api bayar jir ternyata tapi udah ampir selesai guabuatnya bangke';
                            $prompt->save();
                            session()->put('chat-id',$prompt_new_chat->id);
                        }
                        catch(Exception $e)
                        {
                            return dd($e);
                        }
                }
                catch(Exception $e)
                {
                    return $e;
                }
            }
            else
            {
                if($cek_pertama_kali == 0)
                {
                    session()->put('firsttimeuse', 1);
                    
                    $prompt_new_chat = new prompt_chat;
                    $prompt_new_chat->judul = $request->prompt;
                    $prompt_new_chat->user()->associate(Auth::user()->id);
                    
                    
                    try
                    {
                        $prompt_new_chat->save();
                        session()->put('chat-id',$prompt_new_chat->id);
                        $prompt = new chat;
                        $prompt->prompt=$request->prompt;
                        
                        $prompt->response='';
                        $prompt->prompt_chat()->associate($prompt_new_chat->id);
                        try{
                            
                            $prompt->save();
                            
                        }
                        catch(Exception $e)
                        {
                            return dd($e);
                        }
                    }
                    catch(Exception $e)
                    {
                        return dd($e);
                    }
                }
                if($cek_pertama_kali == 1)
                {
                    $id = session()->get('chat-id');
                    $prompt_new_chat = new chat;
                    $prompt_new_chat->prompt = $request->prompt;
                   
                    $prompt_new_chat->response = 'Halo';
                    $prompt_new_chat->prompt_chat()->associate($id);
                    $prompt_new_chat->save();
                    
                    try
                    {
                        $prompt_new_chat->save();
                    }
                    catch(Exception $e)
                    {
                        return dd($e);
                    }
                }
            }
        
            
        }
        else
        {
        
            $guest_response = session()->get('guest');

            if(!$guest_response)
            {
                $guest_response = array(
                    'prompt'
                );
            }
        }
    }
}
