<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Routine extends Model
{
    use HasFactory;
    protected $fillable=[
            'timeslot',
            'weekday',
            'course_code',
            'course_name',
            't_id',
            'teacher_name',
            'yt'
            ];
}
