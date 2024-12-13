<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use App\Http\Resources\Hotel\HotelResource;
use App\Models\Hotel;

class DeleteController extends Controller
{
    public function delete(Hotel $hotel) {
        $hotel->delete();

        return $hotel->name;
    }
}
