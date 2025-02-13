<?php

namespace App\Services\Room;

use App\Models\Room;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ServiceRoom
{
    public function store($data) {
        $newRoom = Room::create($data);
        if(array_key_exists('file', $data)) {
            $originalExtension  = $data['file']->getClientOriginalExtension();
            $lastCreateRoom = Room::latest()->first();
            $path = 'data' . DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR .'hotel_' . $lastCreateRoom->hotel_id . DIRECTORY_SEPARATOR . 'room' . DIRECTORY_SEPARATOR . 'room_' . $lastCreateRoom->id . DIRECTORY_SEPARATOR . 'image';
            $imageName = 'room_' . $lastCreateRoom->id . '_image.' . $originalExtension;
            $path = $data['file']->storeAs($path, $imageName, 'public');
            $lastCreateRoom->image_url = $path;
            $lastCreateRoom->save();
            return 'new room with image created';
        } else {
            return 'file not exists';
        }
        return 'new room created';
    }

    public function update($data, $id)
    {
        $room = Room::find($id);
        $room->name = $data['name'];
        $room->description = $data['description'];
        $room->price = $data['price'];
        $room->hotel_id = $data['hotel_id'];
        $room->save();

        if(array_key_exists('file', $data)) {
            $room = Room::find($id);
            $originalExtension  = $data['file']->getClientOriginalExtension();
            $path = 'data' . DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR .'hotel_' . $room->hotel_id . DIRECTORY_SEPARATOR . 'room' . DIRECTORY_SEPARATOR . 'room_' . $room->id . DIRECTORY_SEPARATOR . 'image';
            $imageName = 'room_' . $room->id . '_image.' . $originalExtension;;
            $path = $data['file']->storeAs($path, $imageName, 'public');
            $room->image_url = $path;
            $room->save();

        } else {
            return 'file not exists';
        }

        return $data;
    }

    public function delete($room)
    {
        $filePath = 'data'. DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR . 'hotel_' . $room->hotel_id . DIRECTORY_SEPARATOR . 'room' . DIRECTORY_SEPARATOR . 'room_' . $room->id . DIRECTORY_SEPARATOR . 'image' . DIRECTORY_SEPARATOR . 'room_' . $room->id . '_image.jpg'; // Укажите относительный путь к файлу
        if (Storage::disk('public')->exists($filePath)) {
             Storage::disk('public')->delete($filePath);
        }
        $room->delete();

        $dirPath = 'data'. DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR . 'hotel_' . $room->hotel_id . DIRECTORY_SEPARATOR . 'room' . DIRECTORY_SEPARATOR . 'room_' . $room->id;// Укажите путь относительно диска
        if (Storage::disk('public')->exists($dirPath)) {
            Storage::disk('public')->deleteDirectory($dirPath);
        }


        return [
            'name' => $room->name,
            'hotel_id' => $room->hotel_id
        ];
    }
}
