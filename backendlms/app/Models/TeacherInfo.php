<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TeacherInfo extends Model
{
    use HasFactory;
    protected $fillable=['teacher_id','designation'];

    public function teacher()
    {
        return $this->belongsTo(User::class);
    }
    public function courses()
    {
        return $this->hasMany(Course::class,'teacher_id','teacher_id');
    }
}
