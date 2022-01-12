<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
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
        'verification_token'
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


    
    // ==========accessor and mutator==============

    public static function generateVerificationCode(){
        return Str::random(6);
    }
}
