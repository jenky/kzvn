<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Record extends Model
{
	use SoftDeletes;

	public $timestamps = false;

	protected $table = 'kz_top';

	protected $guarded = ['id'];

	protected $dates = ['date', 'deleted_at'];

	protected $hidden = ['record_type', 'deleted_at'];

	public function scopeFetch($query, $map, $type)
	{
		return $query->where('mapname', '=', $map)
			->where('record_type', '=', $type);
	}
}