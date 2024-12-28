<?php

namespace App\Http\Requests\Hotel;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'name' => ['required', 'max:255'],
            'address' => ['required', 'string', 'min:3'],
            'description' => ['max:1000'],
            'file' => ['nullable', 'mimes:jpeg,png,jpg,gif,svg']
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Пожалуйста, введите  имя.',
            'name.max' => 'Имя должно быть более 255 символов',
            'address.required' => 'Пожалуйста, введите адрес.',
            'address.string' => 'Пожалуйста, введите, строку',
            'address.min' => 'Имя должно быть менее 3 символов',
            'description.max' => 'Имя должно быть менее 3 символов',
            'file.mimes' => 'Файл должен быть изображением с расширением: jpeg,png,jpg,gif,svg',
        ];
    }
}
