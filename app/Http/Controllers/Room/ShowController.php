<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Http\Resources\Room\RoomResource;
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

    public function showOneRoom(Room $room)
    {
        return new RoomResource($room);
    }
}
