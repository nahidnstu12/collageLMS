<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\StudentInfo;
use App\Models\TeacherInfo;
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
            'course_id' =>Course::all()->random()->id,
            's_id'=>StudentInfo::all()->random()->s_id,
            't_id'=>TeacherInfo::all()->random()->t_id,
            'course_code'=>Course::all()->random()->course_code,
            'ct1'=>rand(1,25),
            'ct2'=>rand(1,25),
            'ct3'=>rand(1,25),
            'attendence'=>rand(1,5),
            'written'=>rand(1,70),
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

    // 'student_id',
    // 'teacher_id',
    // 'course_id',
    // 's_id',
    // 't_id',
    // 'course_code',
    // 'ct1',
    // 'ct2',
    // 'ct3',
    // 'attendence',
    // 'written',
    // 'total',
    // 'yt'

        ];
    }
}
