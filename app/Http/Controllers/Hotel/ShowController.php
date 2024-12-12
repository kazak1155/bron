<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use App\Http\Resources\Hotel\HotelResource;
use App\Models\Hotel;

class ShowController extends Controller
{
    public function index() {

        return HotelResource::collection(Hotel::all());
    }

    public function show(Hotel $hotel) {

        return new HotelResource($hotel);
    }
}
