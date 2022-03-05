<?php

namespace App\Http\Controllers\api\auth;

use Exception;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // generalized register function



    public static function register(Request $request,$user_type='student')
    {
        $request->validate([
            'full_name'=>'required',
            'email'=>'email|required|unique:users',
            'password'=>'required|confirmed',
            
        ]);
        
        $user=new User();

        $data=$request->all();
        $data['password']=Hash::make($request->password);
        $data['verified']=User::UNVERIFIED_USER;
        $data['verification_token']=User::generateVerificationCode();

        $user=User::create($data);
        $user->SendEmailVerificationNotification();

        // role assignment
        $user->attachRole($user_type);

        $token=$user->createToken('auth_token')->accessToken;
        
        return Response(["status"=>1,"msg"=>'registered!',"token"=>$token]);
    }
    

    // student registration

    /**
     * @OA\Post(
     ** path="/student-register",
     *   tags={"student Register"},
     *   summary="Register",
     *   operationId="studentRegister",
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
     *   @OA\Parameter(
     *       name="phone",
     *      in="query",
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="password_confirmation",
     *      in="query",
     *      required=true,
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

    public function studentRegister(Request $request)
    {
        return $this->register($request,'student');
    }


     //generalized login function


    private function login($request,$type="student")
    {
        //validate input
        $request->validate([
            'email'=>'required',
            'password'=>'required',
        ]);

        // verify users by role and then login attempt will heppen
        try{

            $user=User::Where(["email"=>$request->email])->first();
            $role=Role::Where(["name"=>$type])->first();

            if(!$user) throw new Exception("you are not registed");
            if(!$role) throw new Exception("you are not specified user");
        
            $role_status=DB::table('role_user')->where(['role_id'=>$role->id,'user_id'=>$user->id])->value('role_id');
        }
        catch(Exception $e){
            return $this->customResponse(['status'=>0,'msg'=>$e->getMessage()],401);
        }

        if(!$role_status) return $this->customResponse(['status'=>0,'msg'=>'you are are not '.$type],401);
        
        // checking credentials
        $crediantials=$request->only(['email','password']);
        if(!Auth::attempt($crediantials)) return $this->customResponse(['status'=>0,'msg'=>'invalid credintials'],401);

        
        // creating token
        $token=Auth::user()->createToken('auth_token')->accessToken;

        return response(['status'=>1,'msg'=>'logged in!!',"token"=>$token],200);
    }


     //merchat login

    
    /**
 * @OA\Post(
 ** path="/super-admin-login",
    *   tags={"Super Admin Login"},
    *   summary="Login",
    *   operationId="login",
    *
    *   @OA\Parameter(
    *      name="email",
    *      in="query",
    *      required=true,
    *      @OA\Schema(
    *           type="string"
    *      )
    *   ),
    *   @OA\Parameter(
    *      name="password",
    *      in="query",
    *      required=true,
    *      @OA\Schema(
    *          type="string"
    *      )
    *   ),
    *   @OA\Response(
    *      response=200,
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
    *      @OA\Response(
    *          response=403,
    *          description="Forbidden"
    *      )
    *)
    **/
/**
 * login api
 *
 * @return \Illuminate\Http\Response
 */

    public function superAdminLogin(Request $request){

        return $this->login($request,"super_admin");
    }


     //teacher login

    
    /**
 * @OA\Post(
 ** path="/teacher-login",
    *   tags={"teacher Login"},
    *   summary="Login",
    *   operationId="login",
    *
    *   @OA\Parameter(
    *      name="email",
    *      in="query",
    *      required=true,
    *      @OA\Schema(
    *           type="string"
    *      )
    *   ),
    *   @OA\Parameter(
    *      name="password",
    *      in="query",
    *      required=true,
    *      @OA\Schema(
    *          type="string"
    *      )
    *   ),
    *   @OA\Response(
    *      response=200,
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
    *      @OA\Response(
    *          response=403,
    *          description="Forbidden"
    *      )
    *)
    **/
/**
 * login api
 *
 * @return \Illuminate\Http\Response
 */
    public function teacherLogin(Request $request)
    {
        return $this->login($request,"teacher");
    }
    

//student login
    /**
 * @OA\Post(
 ** path="/student-login",
    *   tags={"student Login"},
    *   summary="Login",
    *   operationId="login",
    *
    *   @OA\Parameter(
    *      name="email",
    *      in="query",
    *      required=true,
    *      @OA\Schema(
    *           type="string"
    *      )
    *   ),
    *   @OA\Parameter(
    *      name="password",
    *      in="query",
    *      required=true,
    *      @OA\Schema(
    *          type="string"
    *      )
    *   ),
    *   @OA\Response(
    *      response=200,
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
    *      @OA\Response(
    *          response=403,
    *          description="Forbidden"
    *      )
    *)
    **/
/**
 * login api
 *
 * @return \Illuminate\Http\Response
 */
    
    public function studentLogin(Request $request)
    {
        return $this->login($request,"student");
    }



    // logout function

     /**
     * @OA\Get(
     *      path="/logout",
     *      operationId="logOut",
     *      tags={"logout"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="Get User Profile",
     *      description="Returns user data",
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
    public function logout(){
        $user = Auth::user()->token();
        $user->revoke();
        return $this->customResponse(['status'=>1,'msg'=>'logged out!!'],200);
    }


     /**
     * @OA\Get(
     *      path="/profile",
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
    public function profile()
    {
        $user=Auth::user();
        $user->roles;
        return $this->customResponse(['profile'=>$user],200);
    }
}
    