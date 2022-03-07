<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Generator;
use App\Models\StudentInfo;
use Illuminate\Database\Seeder;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\DB;

class StudentInfoSeeder extends Seeder
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
        // StudentInfo::factory()->count(50)->create();
        DB::table('student_infos')->truncate();
        $students=User::whereRoleIs('student')->get();
        foreach($students as $student){
            StudentInfo::create([
            'student_id'=>$student->id,
            's_id'=>'ASH'.substr(sha1(mt_rand()),17,6).$this->faker->randomElement(['M','F']),
            'yt'=>$this->faker->randomElement([
                'Y1-T1',
                'Y2-T1',
                'Y3-T1',
                'Y4-T1',
                'Y1-T2',
                'Y2-T2',
                'Y3-T2',
                'Y4-T2',
            ]),
            'batch'=>rand(1,12),
            'session'=>$this->faker->randomElement(['2016-2017','2017-2018','2018-2019','2020-2021']),
            'status'=>$this->faker->randomElement(['regular','irregular']),
            'creditCompleted'=>rand(1,125)
            ]);
        }
    }
}
