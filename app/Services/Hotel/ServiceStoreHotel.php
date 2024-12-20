<?php

namespace App\Services\Hotel;

use App\Models\Hotel;
use Illuminate\Support\Facades\Storage;

class ServiceStoreHotel
{
    public function store($data) {
        $newHotel = Hotel::create($data);

        if(array_key_exists('file', $data)) {
            $originalExtension  = $data['file']->getClientOriginalExtension();
            $lastCreteHotel = Hotel::latest()->first();
            $path = 'data' . DIRECTORY_SEPARATOR . 'hotels'. DIRECTORY_SEPARATOR .'hotel_' . $lastCreteHotel->id . DIRECTORY_SEPARATOR . 'image' . DIRECTORY_SEPARATOR;
            $imageName = 'hotel_' . $lastCreteHotel->id . '_image.' . $originalExtension;

            $path = $data['file']->storeAs($path, $imageName, 'public');

            $lastCreteHotel->img_url = Storage::url($path);
            $lastCreteHotel->save();
            return 'file exists';
        } else {
            return 'file not exists';
        }
    }
}
