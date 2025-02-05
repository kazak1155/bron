<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Services\Hotel\ServiceHotel;
use App\Services\Room\ServiceRoom;


class BaseRoomController extends Controller
{
    public $service;

    public function __construct(ServiceRoom $service)
    {
        $this->service = $service;
    }
}
