<?php

require __DIR__ . '/vendor/autoload.php';
date_default_timezone_set('America/New_York');

//use Monolog\Logger;
//use Monolog\Handler\StreamHandler;
//
//$log = new Logger('name');
//$log->pushHandler(new StreamHandler('app.txt', Logger::WARNING));
//$log->addWarning('Oh News');

$app = new \Slim\Slim();

$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});

$app->run();

?>