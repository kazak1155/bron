<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Http\Requests\User\StoreRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function storeUser(StoreRequest $request)
    {
         $data = $request->validated();

        return $data;
    }
}

