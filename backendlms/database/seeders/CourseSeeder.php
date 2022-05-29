<?php

namespace Database\Seeders;

use App\Models\Course;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Container\Container;

class CourseSeeder extends Seeder
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
        for($i=1;$i<=20;$i++)
        Course::create(['teacher_id'=> $this->faker->randomElement([1,2,5,6,8,9,4]),
        'course_title'=>$this->faker->word(),
        'credit_hour'=>$this->faker->randomElement([2,3]),
        'course_code'=>'CSTE'.substr(sha1(mt_rand()),17,6),
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
        'course_description'=>$this->faker->paragraph()]);
    }
}
