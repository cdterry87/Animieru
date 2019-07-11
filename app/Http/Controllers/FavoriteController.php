<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Favorite;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    /**
     * Favorite an item.
     *
     * @param  int  $project_id
     * @return \Illuminate\Http\Response
     */
    public function favorite(Request $request, Favorite $favorite)
    {
        $favorite->user_id = Auth::user()->id;
        $favorite->mal_id = $request->mal_id;
        $status = $favorite->save();

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Favorite success!' : 'Favorite failure!'
        ]);
    }
}
