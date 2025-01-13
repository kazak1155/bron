<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Requests\Hotel\UpdateRequest;
use Illuminate\Http\Request;

class UpdateController extends BaseHotelController
{
    public function update(UpdateRequest $request, $id)
    {
        $data = $request->validated();

        $data = $this->service->update($data, $id);

        return response()->json(['success' => true, 'data' => $data]);
    }
}
