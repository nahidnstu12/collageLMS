<?php

namespace Database\Seeders;

use Faker\Generator;
use App\Models\Course;
use App\Models\Routine;
use App\Models\TeacherInfo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Container\Container;

class RoutineSeeder extends Seeder
{
    // ===============using faker in seeder ===============
    // 1. making a container(Illuminate) instance with Generator(faker)
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
        DB::table('routines')->truncate();
        $timeslots = ['9-9:45','10-10:45','11-11:45','12-12:45','2-2:245','3-3:45','4-4:45'];
        $days = ['Sunday','Monday','Tuesday','Wednesday','Thusday'];
        foreach($timeslots as $time){
            foreach($days as $day){
                Routine::create([
                'timeslot'=>$time,
                'weekday'=>$day,
                'course_code'=>Course::all()->random()->course_code,
                'course_name'=>$this->faker->word,
                't_id'=>TeacherInfo::all()->random()->t_id,
                'teacher_name'=>$this->faker->name,
                'yt'=>$this->faker->randomElement([
                    'Y1-T1',
                    'Y2-T1',
                    'Y3-T1',
                    'Y4-T1',
                    'Y1-T2',
                    'Y2-T2',
                    'Y3-T2',
                    'Y4-T2',
                    ])
                ]);
            }
        }
    }
} 