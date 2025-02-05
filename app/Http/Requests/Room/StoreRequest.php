<?php

namespace App\Http\Requests\Room;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'max:255', ],
            'price' => ['required', 'min:3'],
            'description' => ['max:1000'],
            'hotel_id' => ['required'],
            'file' => ['nullable', 'mimes:jpeg,png,jpg,gif,svg']
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Пожалуйста, введите  имя.',
            'name.max' => 'Имя должно быть более 255 символов',
            'price.required' => 'Пожалуйста, введите цену комнаты.',
            'price.min' => 'цена должно быть менее 3 символов',
            'description.max' => 'описание должно быть более 1000 символов',
            'file.mimes' => 'Файл должен быть изображением с расширением: jpeg,png,jpg,gif,svg',
        ];
    }
}
