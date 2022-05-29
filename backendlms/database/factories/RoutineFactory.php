<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\TeacherInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoutineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'timeslot'=>$this->faker->randomElement(['9-9:45','10-10:45','11-11:45','12-12:45','2-2:245','3-3:45','4-4:45']),
            'weekday'=>$this->faker->randomElement(['Sunday','Monday','Tuesday','Wednesday','Thusday']),
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
        ];
    }
}
