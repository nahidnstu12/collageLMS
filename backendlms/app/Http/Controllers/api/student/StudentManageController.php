<?php

namespace App\Http\Controllers\api\student;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
    public function show($id)
    {
        $student=User::findOrfail($id)->studentInfos;
        if($student->hasRole('student')) return $this->oneResponse($student);
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
    public function destroy($id)
    {
        $student=User::findOrFail($id);
        if($student->hasRole('student')) {
            $student->delete();
            return $this->customResponse(["message"=>"student deleted!!"]);
        }
        return $this->customResponse(["message"=>"student not found"],404);
    }
}
