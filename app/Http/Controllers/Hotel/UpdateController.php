<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Requests\Hotel\UpdateRequest;
use Illuminate\Http\Request;

class UpdateController extends BaseHotelController
{
    public function update(UpdateRequest $request, $id)
    {
        // Проверка, что данные приходят
//        $data = $request->all(); // Получение всех данных
//        $name = $request->input('name');
//        return response()->json(['message' => '$data', 'data' => $name]);

        $data = $request->validated();

        $data = $this->service->update($data);

        return response()->json(['success' => true, 'data' => $data]);
    }
}
