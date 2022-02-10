<?php

namespace Database\Seeders;

use App\Models\TeacherInfo;
use Illuminate\Database\Seeder;

class TeacherInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TeacherInfo::factory()->count(20)->create();
    }
}
