<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_user')->truncate();
        for($i=1;$i<=100;$i++)
        DB::table('course_user')->insert(
            [
            'user_id' => rand(1,100),
            'course_id' => rand(1,20),
            'created_at' =>now(),
            'updated_at'=>now()
            ]
        );
    }
}
