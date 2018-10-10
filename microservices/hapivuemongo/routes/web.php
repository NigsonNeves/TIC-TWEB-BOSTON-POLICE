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
$router->get('/crimes/findBy/id/{id}','CrimesController@byId');
$router->get('/crimes/findBy/compnos/{compnos}','CrimesController@byCompnos');
$router->get('/crimes/findBy/weapons/{weapon}','CrimesController@byWeapon');
$router->get('/crimes/findBy/streetname/{streetname}','CrimesController@byStreet');
$router->get('/crimes/findBy/month/{month}','CrimesController@byMonth');
$router->get('/crimes/findBy/day/{day}','CrimesController@byDay');
$router->get('/crimes/findBy/ucrpart/{ucrpart}','CrimesController@byUcrpart');
$router->get('/crimes/findBy/type/{type}','CrimesController@byType');
$router->get('/crimes/findBy/nature/{nature}','CrimesController@byNature');
$router->get('/crimes/findBy/district/{natudistrictre}','CrimesController@byDistrict');

$router->post('/crimes','CrimesController@createCrime');
$router->delete('/crimes/{id}','CrimesController@deleteCrime');