<?php

namespace App\Http\Resources\Room;

use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class RoomResource extends JsonResource
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
            'price' => $this->price,
            'hotel_id' => $this->hotel_id,
            'hotel_name' => Hotel::find($this->hotel_id)->name,
            'image_url' => Storage::url($this->image_url),
        ];
    }
}
