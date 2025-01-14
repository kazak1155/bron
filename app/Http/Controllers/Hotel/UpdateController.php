<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Requests\Hotel\UpdateRequest;
use App\Models\Hotel;
use Illuminate\Http\Request;

class UpdateController extends BaseHotelController
{
    public function update(UpdateRequest $request, $id)
    {
        $data = $request->validated();

        $data = $this->service->update($data, $id);
        $hotelName = Hotel::find($id)->name;

        return response()->json(['success' => true, 'hotelName' => $hotelName]);
    }
}
