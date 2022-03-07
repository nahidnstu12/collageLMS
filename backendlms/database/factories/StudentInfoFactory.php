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
            'student_id'=>User::whereRoleIs('student')->get()->uniqid(),
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
        ];
    }
}
