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
        Schema::create('project_user', function (Blueprint $table) {
            $table->id();
            //wont cascade deleted
            $table->foreignUuid('user_id')
                ->references('id')
                ->on('users');
            $table->foreignUuid('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');
            $table->enum('role', ['project_manager','team_member','client'])
                ->default('client');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_user');
    }
};
