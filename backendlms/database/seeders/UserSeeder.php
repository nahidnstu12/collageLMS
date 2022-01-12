<?php

namespace Database\Seeders;

use App\Data\Constants;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateLaratrustTables();
        $user = new User();
        $user->email = 'test@gmail.com';
        $user->full_name = "Administrator User";
        $user->password = bcrypt('123');
        $user->email_verified_at = now();
        $user->save();

        $role = Role::whereName(Constants::ROLE_KEY_SUPER_ADMIN)->firstOrFail();
        return $user->attachRole($role);
    }

    /**
     * Truncates all the laratrust tables and the users table
     *
     * @return    void
     */
    public function truncateLaratrustTables()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('permission_role')->truncate();
        DB::table('permission_user')->truncate();
        DB::table('role_user')->truncate();
        User::truncate();
        Schema::enableForeignKeyConstraints();
    }
}
