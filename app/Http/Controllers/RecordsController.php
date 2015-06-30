<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Record;

class RecordsController extends Controller
{
	public function records(Record $record, $map, $type)
	{
		if (!in_array($type, ['noob', 'pro']))
		{
			return $this->api->responseError(400);
		}

		$records = $record->fetch($map, $type)
			->orderBy('time', 'asc')
			->take(15)
			->get();

		return response()->json($records);
	}

	public function latest(Record $record, Request $request)
	{
		$paginate = $request->input('paginate', 15);

		$records = $record->orderBy('date', 'desc')
			->paginate(15);

		return response()->json($records);
	}
}