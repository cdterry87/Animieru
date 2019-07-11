<?php

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

// Auth routes for login/registration
// Auth::routes();

// Logout route
// Route::get('/api/logout', function () {
//     Auth::logout();
//     return Redirect::to('login');
// });

// Catch-all route
Route::get('/{any}', 'HomeController@index')->where('any', '.*');
