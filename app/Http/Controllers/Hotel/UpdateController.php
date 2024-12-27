<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UpdateController extends BaseHotelController
{
    public function update() {

        $data = $this->service->update();

        return $data;
    }
}
