<?php

use App\Http\Controllers\AboutPageController;
use App\Http\Controllers\ContactPageController;
use App\Http\Controllers\CyclePageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutPageController::class, 'index']);
Route::get('/ourcycle', [CyclePageController::class, 'index']);
Route::get('/news', [NewsPageController::class, 'index']);
Route::get('/contact', [ContactPageController::class, 'index']);

require __DIR__ . '/auth.php';
