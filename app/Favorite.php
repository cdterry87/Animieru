<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $fillable = [
        'user_id', 'mal_id'
    ];

    /**
     * A favorite belongs to a user.
     */
    public function user()
    {
        return $this->belongsTo('App\User')->withTimestamps();
    }
}
