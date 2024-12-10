<?php

use Illuminate\Support\Facades\Route;

Route::get('/{page?}', function () {
    return view('home');
})->where('page', '[\/\w\.-]*');
