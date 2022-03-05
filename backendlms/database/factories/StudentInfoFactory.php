<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudentInfoFactory extends Factory
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
            'year'=>rand(1,4),
            'term'=>rand(1,2),
            'batch'=>rand(1,2),
            'session'=>$this->faker->randomElement(['2016-2017','2017,2018','2018-2019','2020-2021']),
            'status'=>$this->faker->randomElement(['regular','irregular']),
            'creditCompleted'=>rand(1,125)
        ];
    }
}
