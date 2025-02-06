<?php

namespace App\Services\Room;

use App\Models\Room;
use Illuminate\Support\Facades\Storage;

class ServiceRoom
{
    public function store($data) {
//        $newRoom = Room::create($data);
        if(array_key_exists('file', $data)) {
//            $originalExtension  = $data['file']->getClientOriginalExtension();
//            $lastCreateRoom = Room::latest()->first();
//            $path = 'data' . DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR .'hotel_' . $lastCreateRoom->hotel_id . DIRECTORY_SEPARATOR . 'room' . DIRECTORY_SEPARATOR . 'room_' . $lastCreateRoom->id . DIRECTORY_SEPARATOR . 'image' . DIRECTORY_SEPARATOR;
//            $imageName = 'room_' . $lastCreateRoom->id . '_image.' . $originalExtension;
//            $path = $data['file']->storeAs($path, $imageName, 'public');
//            $lastCreateRoom->image_url = $path;
//            $lastCreateRoom->save();
            return 'file exists';
        } else {
            return 'file not exists';
        }
    }

    public function update($data, $id)
    {
//        $hotel = Hotel::find($id);
//        $hotel->name = $data['name'];
//        $hotel->description = $data['description'];
//        $hotel->address = $data['address'];
//        $hotel->save();
//
//        if(array_key_exists('file', $data)) {
//            $hotel = Hotel::find($id);
//            $originalExtension  = $data['file']->getClientOriginalExtension();
//            $path = 'data' . DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR .'hotel_' . $hotel->id . DIRECTORY_SEPARATOR . 'image' . DIRECTORY_SEPARATOR;
//            $imageName = 'hotel_' . $hotel->id . '_image.' . $originalExtension;
//            $path = $data['file']->storeAs($path, $imageName, 'public');
//            $hotel->img_url = $path;
//            $hotel->save();
//
//            return 'file exists';
//        } else {
//            return 'file not exists';
//        }
//
//        return $data;
    }

    public function delete($hotel)
    {
//        $directoryPath = 'data'. DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR . 'hotel_' . $hotel    ->id; // Укажите относительный путь к директории
//        if (Storage::disk('public')->exists($directoryPath)) {
//            Storage::disk('public')->deleteDirectory($directoryPath);
//        }
//        $hotel->delete();
//
//        return $hotel->name;
    }
}
