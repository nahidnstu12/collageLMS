<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeacherInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'teacher_id'=>User::whereRoleIs('teacher')->get()->random()->id,
            't_id'=>substr(sha1(mt_rand()),17,6),
            'designation'=>$this->faker->randomElement(['associate professor','assistant professor','professor']),
        ];
    }
}
