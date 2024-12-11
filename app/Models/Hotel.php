<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Hotel extends Model
{
    use HasFactory;

    protected $table = 'hotels';

    protected $fillable = [
        'id',
        'name',
        'description',
        'img_url',
        'address',
        'user_id',
    ];

    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class);
    }
}
