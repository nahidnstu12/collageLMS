<?php

namespace App\Http\Controllers\api\teacher;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeacherRoleController extends Controller
{
    public function index(User $teacher)
    {
        return $this->customResponse(['roles'=>$teacher->getRoles()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(User $teacher,Request $request)
    {
        $roles= $request->roles;

        foreach($roles as $role){
            if($teacher->hasRole($role))
                return $this->customResponse(['message'=>'role already added']);
            $teacher->attachRole($role);
        }

        return $this->customResponse(['message'=>'roles added']);
    }



    public function destroy(User $teacher,$roles)
    {
        // foreach($roles as $role){
        //     if(!$teacher->hasRole($role))
        //         return $this->customResponse(['message'=>'role already deleted']);
        //     $teacher->detachRole($role);
        // }

        if(!$teacher->hasRole($roles))
            return $this->customResponse(['message'=>'role already deleted']);
        $teacher->detachRole($roles);

        return $this->customResponse(['message'=>'roles are deleted!!']);

    }
}
