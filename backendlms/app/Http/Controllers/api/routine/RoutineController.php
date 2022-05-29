<?php

namespace App\Http\Controllers\api\routine;

use App\Models\Routine;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
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
        // $request->validate([
        //     'course_code'=>[Rule::unique('routines')->ignore($routine->id)],
        //     't_id'=>[Rule::unique('routines')->ignore($routine->id)]
        // ]);
        if(!DB::table('teacher_infos')->where('t_id',$request->t_id)->first()) 
            return $this->customResponse(['msg'=>'No Teacher found with '.$request->t_id]);
        if(!DB::table('courses')->where('course_code',$request->course_code)->first()) 
            return $this->customResponse(['msg'=>'No course found with '.$request->course_code]);        
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
