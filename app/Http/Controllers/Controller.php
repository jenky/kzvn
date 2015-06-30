<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected $api;

	public function __construct()
	{
		$this->api = get_helper('Api');
	}
}
