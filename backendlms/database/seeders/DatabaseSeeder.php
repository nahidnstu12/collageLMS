<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\PermissionSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
            SuperAdminSeeder::class,
            CourseSeeder::class,
            StudentInfoSeeder::class,
            TeacherInfoSeeder::class,
            Routine::class,
            MarkSeeder::class,
        ]);
    }
}
