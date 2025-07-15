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
        Schema::create('prompt_chats', function(Blueprint $blueprint){
                $blueprint->id();
                $blueprint->text('judul');
                $blueprint->bigInteger("user_id")->references('id')->on('users')->onDelete('cascade');
                $blueprint->timestamp("created_at");
                $blueprint->timestamp("updated_at");
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
