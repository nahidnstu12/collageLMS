<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Auth;
use Socialite;
use App\Models\User;
use Str;
use Hash;

class ApiController extends Controller
{
    
    //redirect url method
    public function test() {
        $data = array();
        $data['api_key'] = Hash::make(Str::random(31));
        $data['name'] = strtoupper('Hello MVE');
        if(Auth::user()) {
            $data['auth_token'] = Auth::user()->remember_token;
        }
        return Response::json($data);
    }

    //google login consent
    public function google_login() {
        //send the user's request to google
        return Socialite::driver('google')->redirect();
    }

    //google redirect storing user data
    public function google_redirect() {
        //get oauth request back from google to authenticate user 
        $user = Socialite::driver('google')->user();
        // return Response::json($user);

        //if the user doesn't exist insert that user into table
        //if user exists, get the data from modle
        //in other way, authenticate the user into pane and redirects after the operation

        $user = User::firstOrCreate([
            'email'=>$user->email
            ],[
                'first_name'=>$user->name,
                'password'=>Hash::make(Str::random(20))
            ]
        );

        Auth::login($user,true);
        return redirect('api/test');
    }

    //facebook login consent
    public function facebook_login() {
        //send the user's request to google
        return Socialite::driver('facebook')->stateless()->redirect()->getTargetUrl();
    }

    //facebook redirect storing user data
    public function facebook_redirect() {
        //get oauth request back from google to authenticate user 
        $user = Socialite::driver('facebook')->stateless()->user();
        
        //if the user doesn't exist insert that user into table
        //if user exists, get the data from modle
        //in other way, authenticate the user into pane and redirects after the operation

        $user = User::firstOrCreate([
            'email'=>$user->email
            ],[
                'first_name'=>$user->name,
                'password'=>Hash::make(Str::random(20))
            ]
        );

        Auth::login($user,true);
        return redirect('api//test');
    }
}
