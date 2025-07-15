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
    public function Logout()
    {
        Auth::logout();
        return redirect()->back();
    }
    public function ViewPrompt(Request $request)
    {
       if($request-> chat == 0)
       {
             session()->put('firsttimeuse',0);
             session()->put('chat-id',$request->chat);
       }
        else
        {
            try
            {
                $cek = Auth::user()->prompt_chat->find($request->chat);
                session()->put('chat-id',$request->chat);
                return redirect()->route('PromptPage');

            }
            catch(Exception $e)
            {
                return dd($e);
            }
        }
        
        
    }
    public function PromptPage()
    {
        if(!Auth::user())
        {
            $cek = session()->get("temp_prompt");
            
            
            
            
            
            return Inertia::render('GuestHome',['data' => session("temp_prompt")]);
        
            
        }
        else
        {
            $pageid = session()->get('chat-id');
            if(!$pageid)
            {
                
                 return Inertia::render('DefaultHome', ['chat' => Auth::user()->prompt_chat]);
            }
            else
            {
                $id_page = chat::where('prompt_chat_id',$pageid)->get();
                return Inertia::render('DefaultHome',['data' => $id_page, 'chat' => Auth::user()->prompt_chat()->orderBy('id','desc')->get()]);            
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
                $prompt_new_chat->save();
                
                
                try
                {
                    
                  
                    $prompt_new_chat->save();
                    session()->put('chat-id',$prompt_new_chat->id);
                    $prompt = new chat;
                    $prompt->prompt=$request->prompt;
                            
                    $prompt->response='Testing';
                    $prompt->prompt_chat()->associate($prompt_new_chat->id);
                    $prompt->save();
                            
                        
                        
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
                    $prompt_new_chat = new prompt_chat;
                    $prompt_new_chat->judul = $request->prompt;
                    $prompt_new_chat->user()->associate(Auth::user()->id);
                    $prompt_new_chat->save();
                    
                    
                    try
                    {
                        
                    
                        $prompt_new_chat->save();
                        session()->put('chat-id',$prompt_new_chat->id);
                        $prompt = new chat;
                        $prompt->prompt=$request->prompt;
                                
                        $prompt->response='Testing';
                        $prompt->prompt_chat()->associate($prompt_new_chat->id);
                        $prompt->save();
                                
                            
                            
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
        
            $guest_response = session()->get('temp_prompt'); 

            $guest_response[] = [ // Tambah data baru
                'prompt' => $request->prompt,
                'response' => 'test',
            ];

            session()->put('temp_prompt', $guest_response); // Simpan ulang
            return redirect()->route('PromptPage');
        }
        
    }
}
