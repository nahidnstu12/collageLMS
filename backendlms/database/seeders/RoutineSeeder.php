<?php

namespace Database\Seeders;

use App\Models\Routine;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoutineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('routines')->truncate();
        Routine::factory()->count(50)->create();
    }
}