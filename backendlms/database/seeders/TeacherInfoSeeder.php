<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Generator;
use App\Models\TeacherInfo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Container\Container;

class TeacherInfoSeeder extends Seeder
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
        // TeacherInfo::factory()->count(50)->create();
        DB::table('teacher_infos')->truncate();
        $users=User::whereRoleIs('teacher')->get();
        foreach($users as $user){
            TeacherInfo::create([
            'teacher_id'=>$user->id,
            't_id'=>substr(sha1(mt_rand()),17,6),
            'designation'=>$this->faker->randomElement(['associate professor','assistant professor','professor']),
            ]);
        }
    }
}
