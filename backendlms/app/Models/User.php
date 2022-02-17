<?php

namespace App\Models;

use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;
use Intervention\Image\Facades\Image;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use LaratrustUserTrait;
    use HasFactory, Notifiable,HasApiTokens;

    // verified and unverified user constant declare
    const VERIFIED_USER='1';
    const UNVERIFIED_USER='0';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table='users';

    protected $fillable = [
        'full_name',
        'email',
        'password',
        'verified',
        'verification_token',
        'address',
        'image',
        'phone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function courses()
    {
        return $this->belongsToMany(Course::class,'teacher_id');
    }


    public function marks()
    {
        return $this->hasMany(Mark::class,'student_id');
    }

    public function studentInfos()
    {
        return $this->hasOne(StudentInfo::class,'student_id')->select("s_id","batch","session","yt",
        "status");
    }
    
    public function teacherInfos()
    {
        return $this->hasOne(TeacherInfo::class,'teacher_id')->select(['t_id','designation']);
    }

    
    // ==========accessor and mutator==============

    public static function generateVerificationCode(){
        return Str::random(6);
    }

    // private function pullImageName()
    // {
    //     return $this->image;
    // }

    public function getImageAttribute()
    {
        if($this->attributes['image'])
        return asset('storage/profile/'.$this->attributes['image']);
        else
        return asset('storage/profile/'.'default.jpg');
    }
    public function setImageAttribute($value)
    {
        $image=$value;
        if($image){
            $image_f=uniqid();
            // if($this->attributes['image']) file_exists('storage/profile/'.$this->attributes['image'])?unlink('storage/profile/'.$this->attributes['image']):'';
            Image::make($image)->save(public_path('storage/profile/'.$image_f.'.jpg').'',100,'jpg');
            $this->attributes['image'] = $image_f.'.jpg';
        }
    }
}
