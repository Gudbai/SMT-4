<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function register(Request $request) {
        $data = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
            'level' => 'pelanggan',
            'api_token' => '1233456',
            'status' => '1',
            'relasi' => $request->input('email')
        ];
    }

    public function login(Request $request) {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', $email)->first();

        if ($user->password === $password) {
            $token = Str::random(40);

            $user->update([
                'api_token' => $token
            ]);

            return response()->json([
                'pesan' => 'login berhasil',
                'token' => $token,
                'data' =>$user
            ]);
        } else {
            return response()->json([
                'pesan' => 'login gagal',
                'data' => ''
            ]);
        }
    }
}
