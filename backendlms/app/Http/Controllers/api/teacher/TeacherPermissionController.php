<?php

namespace App\Http\Controllers\api\teacher;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeacherPermissionController extends Controller
{
    public function index(User $teacher)
    {
        return $this->customResponse(['permissions'=>$teacher->getPermissions()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(User $teacher,$permissions)
    {
        foreach($permissions as $permission){
            if($teacher->hasPermission($permission))
                return $this->customResponse(['message'=>'permission alreaday added']);
            $teacher->attachPermission($permission);
        }
    }



    public function destroy(User $teacher,$permissions)
    {
        foreach($permissions as $permission){
            if(!$teacher->haspermission($permission))
                return $this->customResponse(['message'=>'permission alreaday deleted']);
            $teacher->detachPermission($permission);
        }
    }
}
