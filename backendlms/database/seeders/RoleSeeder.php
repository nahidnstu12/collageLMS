<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::updateOrCreate(['name' => 'super_admin', 'display_name' => 'Super_Admin', 'description' => 'Super Admin role']);
        Role::updateOrCreate(['name' => 'teacher', 'display_name' => 'Teacher', 'description' => 'Teacher role']);
        Role::updateOrCreate(['name' => 'student', 'display_name' => 'Student', 'description' => 'Student role']);
    }
}
