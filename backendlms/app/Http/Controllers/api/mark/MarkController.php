<?php

namespace App\Http\Controllers\api\mark;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Mark;
use App\Models\StudentInfo;
use App\Models\TeacherInfo;
use Illuminate\Http\Request;

class MarkController extends Controller
{

    // only assigned teacher can give mark
    
    public function index()
    {
       $marks= Mark::all();

       return $this->mutliResponse($marks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
        // 'student_id'=>'required',
        // 'teacher_id'=>'required',
        // 'course_id'=>'required',
        's_id'=>'required',
        't_id'=>'required',
        'course_code'=>'required',
        'yt'=>'required'
        ]);

        $mark=$request->all();

        // -----------------------------------------------------------

        //student id finding
        $info=StudentInfo::where(['s_id'=>$request->s_id])->get();
        if(sizeof($info)) $info=$info[0];
        $student=$info->student;
        //teacher id finding
        $info=TeacherInfo::where(['t_id'=>$request->t_id])->get();
        if(sizeof($info)) $info=$info[0];
        $teacher=$info->teacher;
        //course code
        $course=Course::where(['course_code'=>$request->course_code])->get();
        if(sizeof($course)) $course=$course[0];


        // id saving
        $mark['student_id']=$student->id;
        $mark['teacher_id']=$teacher->id;
        $mark['course_id']=$course->id;

// ------------------------------------------------------------------

        
        Mark::insert($mark);
        return $this->customResponse(['msg'=>"mark is added"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Mark $mark)
    {
        return $this->oneResponse($mark);
        // $mark= Mark::where(["s_id"=>$s_id])->get();
        // if(sizeof($mark)) $mark= $mark[0];
        // return $this->oneResponse($mark);
    }
    public function studentWiseMark($s_id)
    {
        $marks= Mark::where(["s_id"=>$s_id])->get();
        return $this->mutliResponse($marks);
    }
    public function teacherWiseMark($t_id)
    {
        $marks= Mark::where(["t_id"=>$t_id])->get();
        return $this->mutliResponse($marks);
    }
    public function courseWiseMark($course_code)
    {
        $marks= Mark::where(["course_code"=>$course_code])->get();
        return $this->mutliResponse($marks);
    }
    public function ytWiseMark($yt)
    {
        $marks= Mark::where(["yt"=>$yt])->get();
        return $this->mutliResponse($marks);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $request->validate([
        //     'student_id'=>'required',
        //     'teacher_id'=>'required',
        //     'course_id'=>'required',
        //     's_id'=>'required',
        //     't_id'=>'required',
        //     'course_code'=>'required',
        //     'yt'=>'required'
        // ]);
        $mark=Mark::find($id);

        if($request->student_id) $mark->student_id=$request->student_id;
        if($request->teacher_id) $mark->teacher_id=$request->teacher_id;
        if($request->course_id)  $mark->course_id= $request->course_id;
        if($request->s_id)       $mark->s_id = $request->s_id;
        if($request->t_id)       $mark->t_id = $request->t_id;
        if($request->course_code)$mark->course_code=$request->course_code;
        if($request->ct1)        $mark->ct1=$request->ct1;
        if($request->ct2)        $mark->ct2=$request->ct2;
        if($request->ct3)        $mark->ct3=$request->ct3;
        if($request->attendence) $mark->attendence=$request->attendence;
        if($request->written)    $mark->written=$request->written;
        if($request->total)      $mark->total=$request->total;
        if($request->yt)         $mark->yt=$request->yt;

        $mark->save();
        return $this->customResponse(['msg'=>'mark update']);
    }
    public function batchUpdate(Request $request)
    {
            foreach($request->all() as $uMark){
                $uMark = (object)$uMark;
                if(!property_exists($uMark,"id")) return $this->errorResponse("id is missing",400);
                $mark=Mark::find($uMark->id);

                if(property_exists($uMark,"student_id")) $mark->student_id=$uMark->student_id;
                if(property_exists($uMark,"teacher_id")) $mark->teacher_id=$uMark->teacher_id;
                if(property_exists($uMark,"course_id"))  $mark->course_id= $uMark->course_id;
                if(property_exists($uMark,"s_id"))       $mark->s_id = $uMark->s_id;
                if(property_exists($uMark,"t_id"))       $mark->t_id = $uMark->t_id;
                if(property_exists($uMark,"course_code"))$mark->course_code=$uMark->course_code;
                if(property_exists($uMark,"ct1"))        $mark->ct1=$uMark->ct1;
                if(property_exists($uMark,"ct2"))        $mark->ct2=$uMark->ct2;
                if(property_exists($uMark,"ct3"))        $mark->ct3=$uMark->ct3;
                if(property_exists($uMark,"attendence")) $mark->attendence=$uMark->attendence;
                if(property_exists($uMark,"written"))    $mark->written=$uMark->written;
                if(property_exists($uMark,"total"))      $mark->total=$uMark->total;
                if(property_exists($uMark,"yt"))         $mark->yt=$uMark->yt;

                // if($uMark["student_id"]) $mark->student_id=$uMark["student_id"];
                // if($uMark["teacher_id"]) $mark->teacher_id=$uMark["teacher_id"];
                // if($uMark["course_id"])  $mark->course_id= $uMark["course_id"];
                // if($uMark["s_id"])       $mark->s_id = $uMark["s_id"];
                // if($uMark["t_id"])       $mark->t_id = $uMark["t_id"];
                // if($uMark["course_code"])$mark->course_code=$uMark["course_code"];
                // if($uMark["ct1"])        $mark->ct1=$uMark["ct1"];
                // if($uMark["ct2"])        $mark->ct2=$uMark["ct2"];
                // if($uMark["ct3"])        $mark->ct3=$uMark["ct3"];
                // if($uMark["attendence"]) $mark->attendence=$uMark["attendence"];
                // if($uMark["written"])    $mark->written=$uMark["written"];
                // if($uMark["total"])      $mark->total=$uMark["total"];
                // if($uMark["yt"])         $mark->yt=$uMark["yt"];


                $mark->save();
            }
        return $this->customResponse(["msg"=>"marks are updated"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mark $mark)
    {
        $mark->delete();
        return $this->customResponse(['msg'=>'mark is deleted']);
    }

    public function markGenerate(Request $request)
    {
        $request->validate([
            'course_id' => 'required'
        ]);
    }
}
