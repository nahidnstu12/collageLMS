<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\api\auth\AuthController;
use App\Http\Controllers\api\auth\ForgotController;
use App\Http\Controllers\api\teacher\TeacherController;
use App\Http\Controllers\api\teacher\TeacherRoleController;
use App\Http\Controllers\api\student\StudentManageController;
use App\Http\Controllers\api\auth\EmailVerificationController;
use App\Http\Controllers\api\course\CourseController;
use App\Http\Controllers\api\mark\MarkController;
use App\Http\Controllers\api\teacher\TeacherPermissionController;
use App\Http\Controllers\routine\RoutineController;
use App\Models\Mark;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Auth routes

//          --------------------Register-------------------
Route::post('student-register',[AuthController::class,'studentRegister']);

//          --------------------login-------------------
Route::post('super-admin-login',[AuthController::class,'superAdminLogin']);
Route::post('teacher-login',[AuthController::class,'teacherLogin']);
Route::post('student-login',[AuthController::class,'studentLogin']);

//         --------------------passoword forgot-------------------
Route::post('forgot-password',[ForgotController::class,'forgotPassword']);
Route::post('reset-password',[ForgotController::class,'resetPassword']);


//         --------------------student managing-------------------
Route::resource('students',StudentManageController::class,['only'=>['index','show','destroy','store']]);
Route::post('student/update/{s_id}',[StudentManageController::class,'update']);

Route::get('unverified/students',[StudentManageController::class,'unverifiedStudent']);
Route::get('verify/student/{s_id}',[StudentManageController::class,'studentVerify']);
Route::get('students/yt/{yt}',[StudentManageController::class,'studentByYt']);

//         --------------------teacher managing-------------------
Route::apiResource('teachers',TeacherController::class);
Route::post('teacher/update/{t_id}',[TeacherController::class,'update']);

Route::apiResource('teachers/{teacher}/roles',TeacherRoleController::class,['only'=>['index','store','destroy']]);
Route::apiResource('teachers/{teacher}/permissions',TeacherPermissionController::class,['only'=>['index','store','destroy']]);

// ---------------------- course ---------------

Route::apiResource('courses',CourseController::class);
Route::get('user/{user}/courses',[CourseController::class,'userWiseCourselist']);
Route::get('course/teacher/{teacher_id}',[CourseController::class,'teacherWiseCourse']);
// -----------------marks--------------
Route::apiResource('marks',MarkController::class);
// -------------routine------------
Route::apiResource('routines',RoutineController::class);




Route::middleware(['auth:api'])->group(function () {
    //email verification routes
    Route::post('email/verification-notification',[EmailVerificationController::class,'sendVerificationEmail']);
    Route::post('verify-email/{id}/{hash}',[EmailVerificationController::class,'verify'])->name('verification.verify');

    //student verify

    Route::get('profile',[AuthController::class,'profile'])->middleware(['verified']);
    Route::post('student-profile',function(){return "hello student";})->middleware(['verified','permission:verified_seller']);

    // --------courses----------
    Route::get('user/courses',[CourseController::class,'userCourselist']);

    Route::get('logout',[AuthController::class,'logout']);
    
});

//super admin

Route::middleware(['auth:api','role:super_admin'])->group(function(){
    Route::get('teacher-dashboard',function(){
        return "hello admin";
    })->middleware(['auth:api','role:super_admin']);

});

Route::group(['middleware'=>['web']],function()
{
    Route::get('test',[ApiController::class,'test'])->name('test');
    Route::get('sign-in/google',[ApiController::class,'google_login'])->name('google_login');
    Route::get('sign-in/google/redirect',[ApiController::class,'google_redirect'])->name('google_redirect');
    Route::get('sign-in/facebook',[ApiController::class,'facebook_login'])->name('facebook_login');
    Route::get('sign-in/facebook/redirect',[ApiController::class,'facebook_redirect'])->name('facebook_redirect');
});
