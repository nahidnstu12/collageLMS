<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mark extends Model
{
    use HasFactory;
    
    protected $fillable=[
    'student_id',
    'teacher_id',
    'course_id',
    's_id',
    't_id',
    'course_code',
    'ct1',
    'ct2',
    'ct3',
    'attendence',
    'written',
    'total',
    'yt'];

    public function course(){
        return $this->belongsTo(Course::class);
    }
    public function student()
    {
        return $this->belongsTo(User::class);
    }
}
