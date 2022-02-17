<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id')->nullable();
            $table->unsignedBigInteger('teacher_id')->nullable();
            $table->unsignedBigInteger('course_id')->nullable();
            $table->string('s_id')->nullable();
            $table->string('t_id')->nullable();
            $table->string('course_code')->nullable();
            $table->float('ct1')->nullable();
            $table->float('ct2')->nullable();
            $table->float('ct3')->nullable();
            $table->float('attendence')->nullable();
            $table->float('written')->nullable();
            $table->float('total')->nullable();
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
        Schema::dropIfExists('marks');
    }
}
