<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;
    protected $fillable=['course_code','teacher_id','course_title','credit_hour','course_description'];

    public function Users()
    {
        return $this->belongsToMany(User::class,'course_user');
    }
    public function marks()
    {
        return $this->hasMany(Mark::class);
    }
}