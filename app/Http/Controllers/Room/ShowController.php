<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function showRoomInHotel($id)
    {
        $rooms= Room::select('name', 'id')
            ->where('hotel_id', $id)
            ->get();

        return $rooms;
    }
}
