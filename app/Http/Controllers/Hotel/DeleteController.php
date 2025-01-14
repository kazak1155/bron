<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use App\Models\Hotel;

class DeleteController extends BaseHotelController
{
    public function delete(Hotel $hotel) {

        $data = $this->service->delete($hotel);

        return $data;
    }
}
