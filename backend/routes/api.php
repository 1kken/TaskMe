<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\OrganizationInviteController;
use App\Models\OrganizationInvite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:sanctum');


Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout']);


Route::controller(OrganizationInviteController::class)->group(function () {
    Route::post('/organization/invite', 'create');
});

Route::resource('/organization', OrganizationController::class)
    ->except(['edit', 'show', 'create'])
    ->middleware('auth:sanctum');


