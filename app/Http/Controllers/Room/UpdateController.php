<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Http\Requests\Room\UpdateRequest;
use Illuminate\Http\Request;

class UpdateController extends BaseRoomController
{
    public function update(UpdateRequest $request)
    {
        $data = $request->validated();
        $id = $request->id;
        $data = $this->service->update($data, $id);

        return $data;
    }
}
