<?php

namespace App\Http\Controllers\api\teacher;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Mail\TeacherResetPasswordMail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\teacher\TeacherCreateRequest;
use App\Models\TeacherInfo;

class TeacherController extends Controller
{

    //list of teacher users

     /**
     * @OA\Get(
     *      path="/teachers",
     *      operationId="getUserList",
     *      tags={"Teacher List"},
     * 
     *      summary="Get teacher list",
     *      description="Returns all teacher",
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
        $teachers=User::whereRoleIs('teacher')->get();
        foreach($teachers as $teacher){
            $teacher->teacherInfos;
        }
        return $this->mutliResponse($teachers);
    }


    //create teacher

    // student registration

    /**
     * @OA\Post(
     ** path="/teachers",
     *   tags={"Teacher Create"},
     *   summary="create",
     *   operationId="teacherRegister",
     *
     *  @OA\Parameter(
     *      name="full_name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="role",
     *      in="query",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Response(
     *      response=201,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *   @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *   )
     *)
     **/

    public function store(TeacherCreateRequest $request)
    {
        $request->validate([
            'full_name'=>'required',
            'email'=>'email|required|unique:users',
            'phone' => 'min:11|numeric',
            'address'=>'required',
            'image'=>'mimes:jpeg,jpg,png',
            't_id'=>'required|unique:teacher_infos',
            'designation' => 'required',
            ]);
        
        //creating new teacher
        $user=new User();


        $user=new User();
        $user->full_name=$request->full_name;
        $user->email=$request->email;
        $user->address=$request->address;
        $user->password=Hash::make("teacher");
        if($request->image) $user->image = $request->image;
        // create teacher in database
        $res=$user->save();

        if($res){
            // role assignment
            $user->attachRole("teacher");
            $user->SendEmailVerificationNotification();

            $info=new TeacherInfo();
            $info->teacher_id = $user->id;
            $info->t_id=$request->t_id;
            $info->designation = $request->designation;
            $info->save();

        }



        // additional role assignment 
        if($request->role && is_array($request->role)) foreach($request->role as $role){
            $user->attachRole($role);
        }
        else{
            $user->attachRole($request->role);
        }

        // additional permission assignment 
        if($request->permission) foreach($request->permission as $permission){
            $user->attachPermission($permission);
        }

        // $token=$user->createToken('auth_token')->accessToken;
        $token=rand(100,10000);

        DB::table('password_resets')->insert([
            'email'=>$request->email,
            'token'=>$token
        ]);

        // sending mail toh teacher email
        Mail::to($request->email)->send(new TeacherResetPasswordMail($token));

        return $this->customResponse(["status"=>1,"msg"=>'teacher created!']);

    }


    //teacher details
    /**
     * @OA\Get(
     *      path="/teachers/{id}",
     *      operationId="getTeacherDetails",
     *      tags={"Teachers Profile"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="Get teacher Profile",
     *      description="Returns teacher data",
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
    public function show($t_id)
    {
        $teacherInfo=TeacherInfo::where(['t_id'=>$t_id])->get();
        if(sizeof($teacherInfo)){
            $teacherInfo[0]->teacher;
            return $this->customResponse($teacherInfo);
        }
        else
        return $this->customResponse(["message"=>"teacher not found"],404);

    }


   //teacher edit
    public function update(Request $request, $t_id)
    {
        $info=TeacherInfo::where(['t_id'=>$t_id])->get();
        if(sizeof($info)){
            $teacher_id=$info[0]->teacher->id;
        }
        $request->validate([
            'email'=>'email|unique:users,email,'.$teacher_id,
            't_id'=>'unique:teacher_infos',
            'image'=>'mimes:jpeg,jpg,png',
        ]);

        if(sizeof($info)){
            $info=$info[0];
            $teacher=$info->teacher;

            //checker is user is teacher
            if(!$teacher->hasRole("teacher"))
            {
                return $this->customResponse(['message'=>'this user not a teacher!']);
            }

                if($request->full_name)$teacher->full_name=$request->full_name;
                if($request->email)$teacher->email=$request->email;
                if($request->address)$teacher->address=$request->address;
                if($request->password)$teacher->password=Hash::make($request->password);
                if($request->image) $teacher->image=$request->image;
                $res=$teacher->save();

                if($res){
    
                    if($request->t_id)$info->t_id=$request->t_id;
                    if($request->designation)$info->designation=$request->designation;
                    $info->save();

                    return $this->customResponse(["msg"=>"teacher updated"]);
                }
        }

         // additional role assignment 
         if($request->role) foreach($request->role as $role){
            if($teacher->hasRole($role))
                return $this->customResponse(['message'=>'role alreaday added']);
            $teacher->attachRole($role);
        }

        // additional permission assignment 
        if($request->permission) foreach($request->permission as $permission){
            if($teacher->hasPermission($permission))
                return $this->customResponse(['message'=>'permission alreaday added']);
            $teacher->attachPermission($permission);
        }
        
        // if($response) return $this->customResponse(['message'=>'teacher updated']);


    }



    //teacher delete
    public function destroy($t_id)
    {
        $info=TeacherInfo::where(['t_id'=>$t_id])->get();
        if(sizeof($info)){
            $teacher=$info[0]->teacher;

            if($info[0] && $teacher){
                $info[0]->delete();
                $teacher->delete();
                return $this->customResponse(['message'=>'teacher has deleted successfully!']);
            }
            $this->errorResponse('teacher not found',404);
        }
        else
            return $this->errorResponse('teacher not found',404);
    }
}
