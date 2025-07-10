<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class chat extends Model
{
    protected $fillable = [
        'prompt',
        'reponse'
    ];
    public function prompt_chat() : BelongsTo
    {
        return $this->belongsTo(prompt_chat::class);
    }
}
