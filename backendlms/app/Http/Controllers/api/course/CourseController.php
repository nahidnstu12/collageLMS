<?php

namespace App\Http\Controllers\api\course;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TeacherInfo;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    // all course list

     /**
     * @OA\Get(
     *      path="/courses",
     *      operationId="courses",
     *      tags={"courses"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="Get course list",
     *      description="Returns all course",
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
        $courses=Course::all();
        foreach($courses as $course){
            $course->teacher;
        }
        return $this->mutliResponse($courses);
    }

    // User wise course list

     /**
     * @OA\Get(
     *      path="/user/courses",
     *      operationId="userCourses",
     *      tags={"courses"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="Get user wise course list",
     *      description="Returns all course",
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
    public function userCourselist()
    {
        $user=Auth::User();
        $courses=$user->courses;
        return $this->customResponse(['data'=>$courses]);
    }
    // User wise course list by id

     /**
     * @OA\Get(
     *      path="/user/{user}/courses",
     *      operationId="userWiseCourses",
     *      tags={"courses"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="Get user wise course list",
     *      description="Returns all course",
     * 
     *    @OA\Parameter(
     *      name="user",
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
    public function userWiseCourselist(User $user)
    {
        $courses=$user->courses;
        return $this->customResponse(['data'=>$courses]);
    }

    // course create
    /**
     * @OA\Post(
     ** path="/courses",
     *   tags={"Create Course"},
     *   summary="create",
     *   operationId="courseCreate",
     *
     *  @OA\Parameter(
     *      name="course_code",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="teacher_id",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Parameter(
     *       name="course_title",
     *      in="query",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="credit_hour",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="course_description",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="year",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="term",
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
    public function store(Request $request)
    {
        $request->validate([
            'teacher_id'=>'required',
            'course_code'=>'required|unique:courses',
            'course_title'=>'required',
            'course_description'=>'required',
            'credit_hour'=>'required',
            'yt' =>'required'
        ]);
        $course=$request->all();
        $res=Course::create($course);
        return $this->customResponse(['msg'=>'course created','data'=>$res]);
    }

    /**
     * @OA\Get(
     *      path="/courses/{id}",
     *      operationId="getCourse",
     *      tags={"course details"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="Get course details",
     *      description="Returns course data",
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
    public function show($course_code)
    {
        $course_details= Course::where(['course_code'=>$course_code])->get();
        if(sizeof($course_details)){
            $course_details[0]->teacher;
            return $this->customResponse($course_details[0]);
        }
        else return $this->errorResponse('Course not found',404);
    }

    // course update
    /**
     * @OA\Put(
     ** path="/courses/{id}",
     *   tags={"update Course"},
     *   summary="update",
     *   operationId="updateCreate",
     *
     *  @OA\Parameter(
     *      name="id",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="course_code",
     *      in="query",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="teacher_id",
     *      in="query",
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Parameter(
     *       name="course_title",
     *      in="query",
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="credit_hour",
     *      in="query",
     *      @OA\Schema(
     *           type="integer"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="course_description",
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
    public function update(Request $request, $course_code)
    {
        $course=Course::where(['course_code'=>$course_code])->get();

        if(sizeof($course)){
        $course = $course[0];
        if($request->course_code) $course->course_code= $request->course_code;
        if($request->course_title) $course->course_title = $request->course_title;
        if($request->course_description) $course->course_description= $request->course_description;
        if($request->credit_hour) $course->credit_hour= $request->credit_hour;
        if($request->teacher_id) $course->teacher_id = $request->teacher_id;
        
        $course->save();
        }
        else return $this->errorResponse('course not found',404);
        return $this->customResponse(['msg'=>'course updated']);
    }

    /**
     * @OA\Delete(
     *      path="/courses/{id}",
     *      operationId="courseDelete",
     *      tags={"Delete course"},
     * 
     *       security={
     *           {"bearerAuth": {}}
     *       },
     * 
     *      summary="delete",
     *      description="Delete course",
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
    public function destroy(Course $course)
    {
        $course->delete();
        return $this->customResponse(['msg'=>'course deleted!!']);
    }
    public function teacherWiseCourse($teacher_id){
        $teacher=TeacherInfo::where(['t_id'=>$teacher_id])->get();

        if(sizeof($teacher)) $teacher=$teacher[0];
        else return $this->errorResponse('The teacher is not found',404);
        
        $courses=$teacher->courses;
        return $courses;
    }

}
