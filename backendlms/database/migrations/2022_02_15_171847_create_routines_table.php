<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoutinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routines', function (Blueprint $table) {
            $table->id();
            // $table->string('t_id');
            // $table->string('course_id');
            $table->string('timeslot')->nullable();
            $table->string('weekday')->nullable();
            $table->string('course_code')->nullable();
            $table->string('course_name')->nullable();
            $table->string('t_id')->nullable();
            $table->string('teacher_name')->nullable();
            $table->string('yt')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('routines');
    }
}
