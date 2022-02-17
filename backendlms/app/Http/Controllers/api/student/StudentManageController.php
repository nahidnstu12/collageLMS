<?php

namespace App\Http\Controllers\api\student;

use App\Data\Constants;
use App\Models\User;
use App\Models\StudentInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class StudentManageController extends Controller
{
    //verified students list

    //list of Student users

     /**
     * @OA\Get(
     *      path="/students",
     *      operationId="getStudentList",
     *      tags={"Verified Student List"},
     * 
     *      summary="Get verified Student list",
     *      description="Returns verified Student",
     * 
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *      ),
     *      @OA\Response(
     *      response=404,
     *      description="not found"
     *      ),
     *  )
     */

    public function index()
    {
       $students=User::all()->filter(function ($item, $key) {
            return $item->hasPermission('verified_student');

        })->values();

        // student info pulling
        foreach($students as $student)
        {
            $student->studentInfos;
        }
        
        return $this->mutliResponse($students,200);
    }


    //unverified students list

     /**
     * @OA\Get(
     *      path="/unverified/students",
     *      operationId="getUnverfiedStudentList",
     *      tags={"Unverified Student List"},
     * 
     *      summary="Get Unverified Student list",
     *      description="Returns Unverified Student",
     * 
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *      ),
     *      @OA\Response(
     *      response=404,
     *      description="not found"
     *      ),
     *  )
     */

    public function unverifiedStudent()
    {
       $students=User::all()->filter(function ($item, $key) {
            return $item->hasRole('student') && !$item->hasPermission('verified_student');

        })->values();

        //student info pulling
        foreach($students as $student)
        {
            $student->studentInfos;
        }
        

        return $this->mutliResponse($students,200);
    }

    

     //student verify

     /**
     * @OA\Get(
     *      path="/verify/student/{id}",
     *      operationId="verifySudent",
     *      tags={"Verify Student"},
     * 
     *      summary="Verify Student with id",
     *      description="Verify and unverified student",
     * 
     * @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     * 
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *      ),
     *      @OA\Response(
     *      response=404,
     *      description="not found"
     *      ),
     *  )
     */
    public function studentVerify($s_id)
    {
        // $student=User::findOrFail($id);
        $studentInfo = StudentInfo::where(['s_id'=>$s_id])->get();
        if(sizeof($studentInfo)){

            $student=$studentInfo[0]->student;
            if($student->hasRole('student')){
                $student->attachPermission('verified_student');
                return $this->customResponse(["message"=>"student has been approved"]);
            }
        }
        return $this->customResponse(["message"=>"student not found"],404);
    }


    public function store(Request $request)
    {
        $request->validate([
        'full_name'=>'required',
        'email'=>'email|required|unique:users',
        'address'=>'required',
        's_id'=>'required|unique:student_infos',
        'yt'=>'required',
        'batch'=>'required',
        'session'=>'required',
        'image'=>'mimes:jpeg,jpg,png',
        ]);

        $user=new User();
        $user->full_name=$request->full_name;
        $user->email=$request->email;
        $user->address=$request->address;
        $user->password=bcrypt('you_can_do');
        if($request->image) $user->image = $request->image;
        $res=$user->save();

        if($res){
            $user->attachPermission('verified_student');
            $info=new StudentInfo();
            $info->s_id=$request->s_id;
            $info->student_id=$user->id;
            $info->yt=$request->yt;
            $info->batch=$request->batch;
            $info->session=$request->session;
            $info->status=$request->status;
            $info->save();    
            return $this->customResponse(["msg"=>"student created"]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * @OA\Get(
     *      path="/students/{id}",
     *      operationId="getUserList",
     *      tags={"User Profile"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="Get User Profile",
     *      description="Returns user data",
     * 
     * @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     * 
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *      ),
     *      @OA\Response(
     *      response=404,
     *      description="not found"
     *      ),
     *  )
     */
    public function show($s_id)
    {
        $studentInfo=StudentInfo::where(['s_id'=>$s_id])->get();
        if(sizeof($studentInfo)){
            $studentInfo[0]=$studentInfo[0]->student;
            $studentInfo[0]->studentInfos;
            // if($studentInfo[0]->image) $studentInfo[0]->image=asset('storage/profile/'.$studentInfo[0]->image);
            return $this->customResponse($studentInfo);
        }
        else
        return $this->customResponse(["message"=>"student not found"],404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $s_id)
    {
        $info=StudentInfo::where(['s_id'=>$s_id])->get();
        if(sizeof($info)){
            $user_id=$info[0]->student->id;

        }
        $request->validate([
            'email'=>'email|unique:users,email,'.$user_id,
            's_id'=>'unique:student_infos',
            'image'=>'mimes:jpeg,jpg,png',
            ]);

            $info=StudentInfo::where(['s_id'=>$s_id])->get();

            if(sizeof($info)){
                $info=$info[0];
                $user=$info->student;
                // return $user;

                // $user=new User();
                if($request->full_name)$user->full_name=$request->full_name;
                if($request->email)$user->email=$request->email;
                if($request->address)$user->address=$request->address;
                if($request->password)$user->password=Hash::make($request->password);
                if($request->image) $user->image=$request->image;
                $res=$user->save();

                if($res){
        
                    // $info=new StudentInfo();
                    if($request->s_id)$info->s_id=$request->s_id;
                    // if($request->student_id)$info->student_id=$user->id;
                    if($request->yt)$info->yt=$request->yt;
                    if($request->batch)$info->batch=$request->batch;
                    if($request->session)$info->session=$request->session;
                    if($request->status)$info->status=$request->status;
                    $info->save();
                    return $this->customResponse(["msg"=>"student updated"]);
                }
            }
    }

    /**
     * @OA\Delete(
     *      path="/students/{id}",
     *      operationId="studentDelete",
     *      tags={"Delete Student"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="delete",
     *      description="Delete student",
     * 
     * @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     * 
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *      ),
     *      @OA\Response(
     *      response=404,
     *      description="not found"
     *      ),
     *  )
     */
    public function destroy($s_id)
    {
        $info=StudentInfo::where(['s_id'=>$s_id])->get();
        if(sizeof($info)){
            $student=$info[0]->student;

            if($info[0] && $student){
                $info[0]->delete();
                $student->delete();
                return $this->customResponse(['message'=>'student has deleted successfully!']);
            }
            $this->errorResponse('student not found',404);
        }
        else
            return $this->errorResponse('student not found',404);
        return $info;
    }

    public function studentByYt($yt){
        $infos=StudentInfo::where(['yt'=>$yt])->get();
        $i=0;
        if(sizeof($infos)){
            foreach($infos as $info){
                $infos[$i]=$info->student;
                $infos[$i]->studentInfos;
                $i++;
            }
        }
        return $this->mutliResponse($infos);
    }
}
