<?php

namespace Database\Seeders;

use App\Models\StudentInfo;
use Illuminate\Database\Seeder;

class StudentInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        StudentInfo::factory()->count(20)->create();
    }
}
