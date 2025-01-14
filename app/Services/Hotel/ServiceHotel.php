<?php

namespace App\Services\Hotel;

use App\Models\Hotel;
use Illuminate\Support\Facades\Storage;

class ServiceHotel
{
    public function store($data) {
        $newHotel = Hotel::create($data);

        if(array_key_exists('file', $data)) {
            $originalExtension  = $data['file']->getClientOriginalExtension();
            $lastCreateHotel = Hotel::latest()->first();
            $path = 'data' . DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR .'hotel_' . $lastCreateHotel->id . DIRECTORY_SEPARATOR . 'image' . DIRECTORY_SEPARATOR;
            $imageName = 'hotel_' . $lastCreateHotel->id . '_image.' . $originalExtension;
            $path = $data['file']->storeAs($path, $imageName, 'public');
            $lastCreateHotel->img_url = $path;
            $lastCreateHotel->save();
            return 'file exists';
        } else {
            return 'file not exists';
        }
    }

    public function update($data, $id)
    {
        $hotel = Hotel::find($id);
        $hotel->name = $data['name'];
        $hotel->description = $data['description'];
        $hotel->address = $data['address'];
        $hotel->save();

        if(array_key_exists('file', $data)) {
            $hotel = Hotel::find($id);
            $originalExtension  = $data['file']->getClientOriginalExtension();
            $path = 'data' . DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR .'hotel_' . $hotel->id . DIRECTORY_SEPARATOR . 'image' . DIRECTORY_SEPARATOR;
            $imageName = 'hotel_' . $hotel->id . '_image.' . $originalExtension;
            $path = $data['file']->storeAs($path, $imageName, 'public');
            $hotel->img_url = $path;
            $hotel->save();

            return 'file exists';
        } else {
            return 'file not exists';
        }

        return $data;
    }

    public function delete($hotel)
    {
        $directoryPath = 'data'. DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR . 'hotel_' . $hotel    ->id; // Укажите относительный путь к директории
        if (Storage::disk('public')->exists($directoryPath)) {
            Storage::disk('public')->deleteDirectory($directoryPath);
        }
        $hotel->delete();

        return $hotel->name;
    }
}
