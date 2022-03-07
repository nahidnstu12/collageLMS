<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentInfo extends Model
{
    use HasFactory;
   protected $fillable= [
                        's_id',
                        'yt',
                        'batch',
                        'session',
                        'status',
                        'creditCompleted'];
    public function student()
    {
        return $this->belongsTo(User::class,'student_id','id');
    }

}
