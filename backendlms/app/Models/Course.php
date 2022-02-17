<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;
    protected $fillable=['course_code', 'teacher_id', 'course_title', 'credit_hour', 'yt', 'course_description'];

    public function users()
    {
        return $this->belongsToMany(User::class,'course_user');
    }
    public function teacher()
    {
        return $this->belongsTo(User::class,'teacher_id','id')->select('full_name');
    }
    public function marks()
    {
        return $this->hasMany(Mark::class);
    }
}