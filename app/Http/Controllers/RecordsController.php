<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Record;

class RecordsController extends Controller
{
	public function records(Record $record, $map, $type)
	{
		$records = $record->fetch($map, $type)
			->orderBy('time', 'asc')
			->take(15)
			->get();

		return response()->json($records);
	}

	public function allRecords(Record $record, $map)
	{
		$proRecords = $record->fetch($map, 'pro')
			->orderBy('time', 'asc')
			->take(15)
			->get();

		$noobRecords = $record->fetch($map, 'noob')
			->orderBy('time', 'asc')
			->take(15)
			->get();

		$records = [
			'pro' => $proRecords,
			'noob' => $noobRecords,
		];

		return response()->json($records);
	}

	public function latest(Record $record, Request $request)
	{
		$paginate = $request->input('paginate', 15);

		$records = $record->orderBy('date', 'desc')
			->paginate(15);

		return response()->json($records);
	}

	public function stream(Record $record, Request $request)
	{
		if ($request->has('ts'))
		{
			$records = $record->where('date', '>=', $request->input('ts'))
				->orderBy('date', 'desc')
				->get();
		}
		else
		{
			$records = $record->take(15)
				->orderBy('date', 'desc')
				->get();
		}

		return response()->json($records);
	}
}