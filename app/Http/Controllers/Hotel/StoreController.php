<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Requests\Hotel\StoreRequest;

class StoreController extends BaseHotelController
{
    public function store(StoreRequest $request) {

        $data = $request->validated();

        $data = $this->service->store($data);

        return response()->json(['success' => true, 'data' => $data]);
    }
}
