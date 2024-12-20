<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use App\Services\Hotel\ServiceStoreHotel;

class BaseHotelController extends Controller
{
    public $service;

    public function __construct(ServiceStoreHotel $service)
    {
        $this->service = $service;
    }
}
