<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCrimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crimes', function ($collection) {
            $collection->unique('_id');
            $collection->index('compnos');
            $collection->index('naturecode');
            $collection->index('incident_type_description');
            $collection->index('main_crimecode');
            $collection->index('reptdistrict');
            $collection->index('reportingarea');
            $collection->index('fromdate');
            $collection->index('weapontype');
            $collection->index('shooting');
            $collection->index('domestic');
            $collection->index('shift');
            $collection->index('year');
            $collection->index('month');
            $collection->index('day_week');
            $collection->index('ucrpart');
            $collection->index('x');
            $collection->index('y');
            $collection->index('streetname');
            $collection->index('xstreetname');
            $collection->index('location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crimes');
    }
}
