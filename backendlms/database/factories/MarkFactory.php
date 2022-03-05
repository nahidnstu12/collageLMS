<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MarkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'student_id'=>User::whereRoleIs('student')->get()->random()->id,
            'course_id' =>rand(1,20),
            'ct1'=>rand(1,25),
            'ct2'=>rand(1,25),
            'ct3'=>rand(1,25),
            'attendence'=>rand(1,5),
            'writte'=>rand(1,70),
            'total'=>rand(1,100),
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
