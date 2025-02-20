<?php

use Illuminate\Support\Facades\Route;

Route::get('/{page?}', function () {
    return view('home');
})->where('page', '[\/\w\.-]*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
