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

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/crimes','CrimesController@index');
$router->get('/search','CrimesController@search');
$router->get('/findBy/id/{id}','CrimesController@byId');
$router->get('/findBy/compnos/{compnos}','CrimesController@byCompnos');
$router->get('/findBy/weapons/{weapon}','CrimesController@byWeapon');
$router->get('/findBy/streetname/{streetname}','CrimesController@byStreet');
$router->get('/findBy/month/{month}','CrimesController@byMonth');
$router->get('/findBy/day/{day}','CrimesController@byDay');
$router->get('/findBy/ucrpart/{ucrpart}','CrimesController@byUcrpart');
$router->get('/findBy/type/{type}','CrimesController@byType');
$router->get('/findBy/nature/{nature}','CrimesController@byNature');
$router->get('/findBy/district/{natudistrictre}','CrimesController@byDistrict');

$router->post('/crimes','CrimesController@createCrime');
$router->delete('/crimes/{id}','CrimesController@deleteCrime');