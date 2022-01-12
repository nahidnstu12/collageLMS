<?php

namespace App\Http\Requests\teacher;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class TeacherCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "full_name" => "required",
            "email"=>"email|required|unique:users",

            // validating incoming array with all permission exit in role table

            "permission"=>[ function ($attribute, $value, $fail) {
                foreach($value as $v){
                    if(!array_search($v,array_column(Permission::all()->toArray(),"name"),true)){
                        $fail('The '.$v.' '.$attribute.' is invalid.');
                    }
                }
            }],

             // validating incoming array with all roles exit in role table
            "role"=>[ function ($attribute, $value, $fail) {
                if(is_array($value)){

                    foreach($value as $v){
                        if(!array_search($v,array_column(Role::all()->toArray(),"name"),true)){
                            $fail('The '.$v.' '.$attribute.' is invalid.');
                        }
                    }
                }
            }]
            
        ];
    }
}
