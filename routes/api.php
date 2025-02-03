<?php

use App\Http\Controllers\Hotel\StoreController;
use App\Http\Controllers\Hotel\DeleteController;
use App\Http\Controllers\Hotel\UpdateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Hotel\ShowController;
use App\Http\Controllers\Room\ShowController as RoomShowController;;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('hotels', [ShowController::class, 'index'])->name('index.hotel');
Route::get('hotel/{hotel}', [ShowController::class, 'show'])->name('show.hotel');
Route::delete('hotel/{hotel}', [DeleteController::class, 'delete'])->name('delete.hotel');
Route::post('hotel_store', [StoreController::class, 'store'])->name('store.hotel');
Route::patch('hotel/{hotel}', [UpdateController::class, 'update'])->name('update.hotel');


Route::get('room/{room}', [RoomShowController::class, 'showRoomInHotel'])->name('show.Room');
