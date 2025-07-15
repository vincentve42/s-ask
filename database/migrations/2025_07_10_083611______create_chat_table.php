<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chats',function(Blueprint $blueprint){
            $blueprint->id();
            $blueprint->bigInteger('prompt_chat_id')->references('id')->on('prompt_chats')->onDelete('cascade');
            $blueprint->text('response');
            $blueprint->text('prompt');
            $blueprint->timestamp('created_at');
            $blueprint->timestamp('updated_at');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
