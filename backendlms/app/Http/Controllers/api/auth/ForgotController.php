<?php

namespace App\Http\Controllers\api\auth;

use App\Models\User;
use App\Mail\ForgotMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ForgotController extends Controller
{

    /**
     * @OA\Post(
     ** path="/forgot-password",
     *   tags={"Forgot Password"},
     * 
     *   summary="Forgot Password mail",
     *   operationId="forgotMail",
     *
     *  @OA\Parameter(
     *      name="email",
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

    public function forgotPassword(Request $request){
        $request->validate([
            'email'=>'required'
        ]);

        $email=$request->email;

        if(User::where(['email'=>$email])->doesntExist()){
            return response(['status'=>0,'msg'=>'email not found'],404);
        }
        
        $token=rand(100,10000);

        DB::table('password_resets')->insert([
            'email'=>$email,
            'token'=>$token
        ]);
        
        Mail::to($email)->send(new ForgotMail($token));

        return response([
            'status'=>1,
            'msg'=>'reset token send to your email'
        ],200);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token'=>'required',
            'email'=>'required',
            'password'=>'required|confirmed'
        ]);

        $token=$request->token;
        $email=$request->email;
        $password=Hash::make($request->password);

        $emailcheck=DB::table('password_resets')->where('email',$email)->first();
        $tokencheck=DB::table('password_resets')->where('token',$token)->first();

        if(!$emailcheck){
            return response(['status'=>0,'msg'=>'invalid email'],404);
        }
        if(!$tokencheck){
            return response(['status'=>0,'msg'=>'invalid token'],404);
        }

        DB::table('users')->where('email',$email)->update(['password'=>$password]);
        DB::table('password_resets')->where('email',$email)->delete();

        return response(['status'=>1,'msg'=>'password reset successfully'],200);
    }
}
