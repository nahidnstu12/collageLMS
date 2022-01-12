<?php

namespace App\Http\Controllers\api\student;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class StudentManageController extends Controller
{
    
    //verified students list
    public function index()
    {
       $students=User::all()->filter(function ($item, $key) {
            return $item->hasPermission('verified_student');

        })->values();
        return $this->mutliResponse($students,200);
    }


    //unverified students list

    public function unverifiedStudent()
    {
       $students=User::all()->filter(function ($item, $key) {
            return $item->hasRole('student') && !$item->hasPermission('verified_student');

        })->values();

        return $this->mutliResponse($students,200);
    }

    

    public function studentVerify($id)
    {
        $student=User::findOrFail($id);
        if($student->hasRole('student')){
            $student->attachPermission('verified_student');
            return $this->customResponse(["message"=>"student has been approved"]);
        }
        return $this->customResponse(["message"=>"student not found"],404);
    }


    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user=User::findOrfail($id);
        if($user->hasRole('student')) return $this->oneResponse($user);
        return $this->customResponse(["message"=>"student not found"],404);
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
        //
    }

    public function destroy($id)
    {
        $user=User::findOrFail($id);
        if($user->hasRole('student')) {
            $user->delete();
            return $this->customResponse(["message"=>"student deleted!!"]);
        }
        return $this->customResponse(["message"=>"student not found"],404);
    }
}
