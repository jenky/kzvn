<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// $app->get('/', function () use ($app) {
//     return $app->welcome();
// });

$app->group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers'], function () use ($app) {
	$app->get('records', [
		'as' => 'records.index',
		'uses' => 'RecordsController@latest'
	]);

	$app->get('records/stream', [
		'as' => 'records.stream',
		'uses' => 'RecordsController@stream'
	]);

	$app->get('records/{map}', [
		'as' => 'records.show',
		'uses' => 'RecordsController@allRecords'
	]);

	$app->get('records/{map}/{type:pro|noob}', [
		'as' => 'records.show',
		'uses' => 'RecordsController@records'
	]);
});

$app->get('/', function () use ($app) {
    return view('app');
});