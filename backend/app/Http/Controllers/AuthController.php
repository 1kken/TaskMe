<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(Request $request){
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => ['required','confirmed',Password::min(8)
                                                    ->mixedCase()
                                                    ->letters()
                                                    ->numbers()
                                                    ->symbols()
                                                    ->uncompromised()]
        ]);
        $user = User::create($validated);

        return response()->json([
            'user' => $user,
        ],200);
    }
    public function login(Request $request){
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(!Auth::attempt($validated)){
            return response()->json(['message' => 'Invalid Credentials'],401);
        }

        $user = Auth::user();

        return response()->json(['user'=>$user],200);
    }

    public function logout(Request $request){
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out'],200);
    }

}
