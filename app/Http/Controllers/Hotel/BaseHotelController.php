<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use App\Services\Hotel\ServiceHotel;

class BaseHotelController extends Controller
{
    public $service;

    public function __construct(ServiceHotel $service)
    {
        $this->service = $service;
    }
}
