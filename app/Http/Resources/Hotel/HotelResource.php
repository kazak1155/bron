<?php

namespace App\Http\Resources\Hotel;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class HotelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'address' => $this->address,
//            'img_url' => $this->img_url,
            'img_url' => Storage::url($this->img_url),
//            'room_id' => Room::where('hotel_id', $this->id)->get()
        ];
    }
}
