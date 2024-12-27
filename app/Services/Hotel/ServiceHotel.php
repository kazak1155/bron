<?php

namespace App\Services\Hotel;

use App\Models\Hotel;

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

    public function update()
    {
        return 'this is service update';
    }
}
