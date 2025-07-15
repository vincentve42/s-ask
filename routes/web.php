<?php

use App\Http\Controllers\PromptController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AuthChecker;
use App\Http\Middleware\GuestChecker;
use Illuminate\Support\Facades\Route;

Route::get('/',[PromptController::class,'PromptPage'])->name('PromptPage');
Route::post('/',[PromptController::class,'SendPrompt'])->name('SendPrompt');
Route::middleware([GuestChecker::class])->group (function(){
    Route::get('/login',[UserController::class,'LoginPage'])->name('LoginPage');
     Route::post('/login',[UserController::class,'Login'])->name('Login');
    Route::get('/register',[UserController::class,'RegisterPage'])->name('RegisterPage');
    Route::post('/register',[UserController::class,'Register'])->name('Register');
});
Route::middleware([AuthChecker::class])->group(function (){
    Route::post('/chat',[PromptController::class,'ViewPrompt'])->name('ViewPrompt');
    Route::get('/logout',[PromptController::class,'Logout'])->name('Logout');
});