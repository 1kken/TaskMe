<?php


use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:sanctum');


Route::get('/test', function (Request $request) {
    return "test";
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);
