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
        
        //creating new teacher
        $user=new User();


        $data=$request->all();
        $data['password']=Hash::make("teacher");

        // creat teacher in database
        $user=User::create($data);
        $user->SendEmailVerificationNotification();

        // role assignment
        $user->attachRole("teacher");

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
        return $request;

    }


    //teacher details
    public function show(User $teacher)
    {
        return $this->oneResponse($teacher);

    }


   //teacher edit
    public function update(Request $request, User $teacher)
    {
        if(!$teacher->hasRole("teacher"))
        {
            return $this->customResponse(['message'=>'this user not an teacher!']);
        }
        $updatedteacher=$teacher;

        if($request->full_name) $updatedteacher['full_name']=$request->full_name;


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
    
        $response=$updatedteacher->update();
        
        if($response) return $this->customResponse(['message'=>'teacher updated']);


    }



    //teacher delete
    public function destroy(User $teacher)
    {
        $teacher->delete();

        return $this->customResponse(['message'=>'teacher has deleted successfully!']);
    }
}
