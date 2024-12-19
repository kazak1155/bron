<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hotel\StoreRequest;
use App\Models\Hotel;
use Illuminate\Http\Request;


class StoreController extends Controller
{
    public function store(StoreRequest $request) {

        $data = $request->validated();


        return response()->json(['success' => true, 'data' => $data]);
    }
}
