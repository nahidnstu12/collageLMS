<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Faker\Generator;
use App\Data\Constants;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\Schema;

class SuperAdminSeeder extends Seeder
{

    // ===============using faker in seeder ===============
    // 1. makeing a container(Illuminate) instance with Generator(faker)
    // 2. use $this->faker to access Faker Factory

    /**
     * The current Faker instance.
     *
     * @var \Faker\Generator
     */
    protected $faker;

    /**
     * Create a new seeder instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->faker = $this->withFaker();
    }

    /**
     * Get a new Faker instance.
     *
     * @return \Faker\Generator
     */
    protected function withFaker()
    {
        return Container::getInstance()->make(Generator::class);
    }

    public function run()
    {
        DB::table('users')->truncate();
        
        $user = new User();
        $user->email = 'admin@mail.com';
        $user->full_name = "Super User";
        $user->password = bcrypt('123');
        $user->email_verified_at = now();
        $user->save();

        $role = Role::whereName(Constants::ROLE_KEY_SUPER_ADMIN)->firstOrFail();
        $user->attachRole($role);

        $user=User::factory()->count(100)->create();
        $user->each(function($item,$key){
        
            $item->attachRole($this->faker->randomElement(['student','teacher']));
            
        });
        
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
