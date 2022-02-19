<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Mark;
use App\Models\StudentInfo;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('marks')->truncate();
        // Mark::factory()->count(20)->create();
        $students=User::whereRoleIs('student')->get();
        // if(sizeof($students))
        foreach($students as $student){
            $info=$student->studentInfos;
            if($info)
            {

                $courses=Course::all();
                foreach($courses as $course){
                    $teacher=$course->teacher;
                    $t_info=$teacher->teacherInfos;

                    Mark::create([
                    'student_id'=>$student->id,
                    'course_id' =>$course->id,
                    'teacher_id'=>$teacher?$teacher->id:null,
                    's_id'=>$info->s_id,
                    't_id'=> $t_info? $t_info->t_id:null,
                    'course_code'=>$course->course_code,
                    'ct1'=>0,
                    'ct2'=>0,
                    'ct3'=>0,
                    'attendence'=>0,
                    'written'=>0,
                    'total'=>0,
                    'yt'=>$info->yt
                    ]);
                }
            }
        }

    }
}
