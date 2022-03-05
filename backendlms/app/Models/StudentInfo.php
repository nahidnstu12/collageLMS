<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentInfo extends Model
{
    use HasFactory;
   protected $fillable= ['year',
                        'term',
                        'batch',
                        'session',
                        'status',
                        'creditCompleted'];
    public function sudent()
    {
        return $this->belongsTo(User::class,'student_id');
    }

}
