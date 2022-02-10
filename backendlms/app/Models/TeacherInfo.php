<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherInfo extends Model
{
    use HasFactory;
    protected $fillable=['designation'];

    public function teacher()
    {
        return $this->belongsTo(User::class);
    }
}
