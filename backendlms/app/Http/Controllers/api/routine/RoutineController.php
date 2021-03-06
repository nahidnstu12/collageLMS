<?php

namespace App\Http\Controllers\api\routine;

use App\Models\Routine;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoutineController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $routines=Routine::all();
        // $days = array_flip(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);

        // usort($data, function($a, $b) use ($days) {
        // return $days[$a->day] <=> $days[$b->day];
        // });

        return $this->mutliResponse($routines);
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
            'timeslot'=>'required',
            'weekday'=>'required',
            'course_code'=>'required|unique:courses',
            'course_name'=>'required',
            't_id'=>'required|unique:routines',
            'teacher_name'=>'required',
            'yt'=>'required'
        ]);

        $routine=$request->all();
        Routine::insert($routine);
        return $this->customResponse(['msg'=>'routine added']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Routine $routine)
    {
        return $this->oneResponse($routine);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Routine $routine)
    {
        // //course code
        // $course=Course::where(['course_code'=>$request->course_code])->get();
        // if(sizeof($course)) $course=$course[0];

        $request->validate([
            'course_code'=>'course_code|unique:routines,course_code,'.$routine->course_code,
            't_id'=>'t_id|unique:routines,t_id,',
        ]);

        // $routine=Routine::find($id);
        if($request->timeslot) $routine->timeslot=$request->timeslot;
        if($request->weekday) $routine->weekday=$request->weekday;
        if($request->course_code) $routine->course_code=$request->course_code;
        if($request->course_name) $routine->course_name=$request->course_name;
        if($request->t_id) $routine->t_id=$request->t_id;
        if($request->teacher_name) $routine->t_id=$request->t_id;
        if($request->yt) $routine->yt=$request->yt;
        $routine->save();
        return $this->customResponse(['msg'=>'routine update']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Routine $routine)
    {
        $routine->delete();
        return $this->customResponse(['msg'=>'the routine is deleted']);
    }
}
