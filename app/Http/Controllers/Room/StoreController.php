<?php

namespace App\Http\Controllers\Room;


use Illuminate\Http\Request;
use App\Http\Requests\Room\StoreRequest;

class StoreController extends BaseRoomController
{
    public function store(StoreRequest $request) {

//        $data = $request->validated();

        $data = $this->service->store($request);

//        return response()->json(['success' => true, 'data' => $data]);
        return $data;
    }
}
