<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use SteamID;

class Record extends Model
{
	use SoftDeletes;

	public $timestamps = false;

	protected $table = 'kz_top';

	protected $guarded = ['id'];

	protected $dates = ['date', 'deleted_at'];

	protected $hidden = ['record_type', 'deleted_at'];

	protected $appends = ['display_time', 'display_time_html', 'steam_is_valid'];

	public function scopeFetch($query, $map, $type)
	{
		return $query->where('mapname', '=', $map)
			->where('record_type', '=', $type);
	}

	public function getDisplayTimeAttribute($value)
	{
		return kz_time($this->getAttribute('time'));
	}

	public function getDisplayTimeHtmlAttribute($value)
	{
		return kz_time($this->getAttribute('time'), true);
	}

	public function getSteamIsValidAttribute($value)
	{
		try
		{
			$steam = new SteamID($this->getAttribute('authid'));
		}
		catch(\InvalidArgumentException $e)
		{
			return false;
		}

		return $steam->IsValid();
	}
}