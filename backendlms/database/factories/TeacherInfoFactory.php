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
            'designation'=>$this->faker->randomElement(['associate professor','assistant professor','professor']),
        ];
    }
}
