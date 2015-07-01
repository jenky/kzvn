<?php

namespace App\Exceptions;

use Exception;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        // 'Symfony\Component\HttpKernel\Exception\HttpException'
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        return parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {
        $helper = get_helper('Api');

        if ($e instanceof ModelNotFoundException)
        {
            $model = $e->getModel();
            $name = str_replace('\\', '', ucfirst(str_singular(class_basename($model))));
            return $helper->responseError(404, $name . ' Not Found', 404);
            // abort(404);
        }

        if ($e instanceof HttpException)
        {
            $status = $e->getStatusCode();
            
            return $helper->responseError($status, '', $status);
        }

        return parent::render($request, $e);
    }
}
