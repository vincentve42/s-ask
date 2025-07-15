<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class prompt_chat extends Model
{
    protected $fillable = [
        'judul'
    ];
    public function user() : BelongsTo 
    {
        return $this->belongsTo(User::class);
    }
    public function chat() : HasMany
    {
        return $this->hasMany(chat::class);
    } 
}
