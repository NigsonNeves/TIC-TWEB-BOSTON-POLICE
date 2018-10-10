<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
/*use Illuminate\Database\Eloquent\Model;*/

class Crimes extends Eloquent {

    public $primarykey = '_id';
    protected $collection = 'crimes';
    protected $connection = 'mongodb';
    public $fillable = [
        'compnos', 'naturecode', 'incident_type_description', 'main_crimecode',
        'reptdistrict', 'reportingarea', 'fromdate', 'weapontype',
        'shooting', 'domestic', 'shift', 'year',    
        'month', 'day_week', 'ucrpart', 'x',
        'y', 'streetname', 'xstreetname', 'location',
    ];
}