<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;

class DeleteController extends BaseRoomController
{
    public function deleteRoom(Room $room)
    {
        $data = $this->service->delete($room);

        return $data;
    }
}
