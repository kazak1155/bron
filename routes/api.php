<?php

//use App\Http\Controllers\Hotel\StoreHotelCotroller;
//use App\Http\Controllers\Room\ShowRoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Hotel\ShowController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('hotels', [ShowController::class, 'index'])->name('index.hotel');
