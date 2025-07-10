<?php

use App\Http\Controllers\PromptController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\GuestChecker;
use Illuminate\Support\Facades\Route;

Route::get('/',[PromptController::class,'PromptPage'])->name('PromptPage');

Route::middleware([GuestChecker::class])->group (function(){
    Route::get('/login',[UserController::class,'LoginPage'])->name('LoginPage');
     Route::post('/login',[UserController::class,'Login'])->name('Login');
    Route::get('/register',[UserController::class,'RegisterPage'])->name('RegisterPage');
    Route::post('/register',[UserController::class,'Register'])->name('Register');
});

