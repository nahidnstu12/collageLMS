<?php

namespace App\Http\Controllers\api\mark;

use App\Http\Controllers\Controller;
use App\Models\Mark;
use Illuminate\Http\Request;

class MarkController extends Controller
{
    
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
        'student_id'=>'required',
        'teacher_id'=>'required',
        'course_id'=>'required',
        's_id'=>'required',
        't_id'=>'required',
        'course_code'=>'required',
        'yt'=>'required'
        ]);
        
        $mark=$request->all();
        Mark::insert($mark);
        return $this->customResponse('mark added');
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
