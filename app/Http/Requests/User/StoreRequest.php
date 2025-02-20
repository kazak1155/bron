<?php

namespace App\Http\Requests\User;

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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string',
//            'name' => 'required',
        ];
    }

//    public function messages()
//    {
//        return [
//            'name.required' => 'Пожалуйста, введите  имя.',
//            'email.required' => 'Пожалуйста, введите email .',
//            'password.required' => 'Пожалуйста, введите password .',
//            'password_confirmation.required' => 'Пожалуйста, введите password  еще раз.',
//        ];
//    }
}
