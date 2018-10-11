<?php

return  [
    'default' => 'mongodb',

    'connections' => [
        'mongodb' => array(
            'driver'   => 'mongodb',
            'host'     => env('MONGODB_HOST', 'mongo'),
            'port'     => env('MONGODB_PORT', 27017),
            'username' => env('MONGODB_USERNAME', 'root'),
            'password' => env('MONGODB_PASSWORD', 'root'),
            'database' => env('MONGODB_DATABASE', 'hapi'),
            'options' => array(
                'db' => env('MONGODB_AUTHDATABASE', 'admin') //Sets the auth DB
            )
        ),

    ],
    'migrations' => 'migrations',
];
