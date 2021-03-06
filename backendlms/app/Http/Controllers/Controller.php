<?php

namespace App\Http\Controllers;

use App\Traits\jsonResponser;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
     * @OA\Info(
     *      version="1.0.0",
     *      title="Student Information API DOCUMENTATION",
     *      description="managing student of department",
     *      @OA\Contact(
     *          email="rubel162765@gmail.com"
     *      ),
     *      @OA\License(
     *          name="Apache 2.0",
     *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
     *      )
     * )
     * 
     * @OA\SecurityScheme(
     *    securityScheme="bearerAuth",
     *    in="header",
     *    name="bearerAuth",
     *    type="http",
     *    scheme="bearer",
     *    bearerFormat="passport",
     * ),
     *
     * @OA\Server(
     *      url="https://studentinfopopy.herokuapp.com/api/",
     *      description="Demo API Server"
     * )
     *
     *
     */

     // http://127.0.0.1:8000/api/
    //    url="https://studentinfopopy.herokuapp.com/api/,


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    // using json responser trait
    use jsonResponser;

}
