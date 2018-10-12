<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use App\Crimes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Validator;

class CrimesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        $crimes =  Crimes::skip(10 - 1)->take(10)->get();

        return response()->json($crimes,200);
    }

    public function search(Request $request)
    {
        $limit = isset($request->limit) ? intval($request->limit) : 10;
        $offset = isset($request->offset) ? intval($request->offset) - 1 : 0;

        $value = $request->value;
        $data = Crimes::skip($offset)->take($limit)
        ->Orwhere('naturecode', '=', $value)
        ->Orwhere('incident_type_description', '=', $value)
        ->Orwhere('main_crimecode', '=', $value)
        ->Orwhere('reptdistrict', '=', $value)
        ->Orwhere('romdate', '=', $value)
        ->Orwhere('weapontype', '=', $value)
        ->Orwhere('shooting', '=', $value)
        ->Orwhere('domestic', '=', $value)
        ->Orwhere('shift', '=', $value)
        ->Orwhere('day_week', '=', $value)
        ->Orwhere('ucrpart', '=', $value)
        ->Orwhere('streetname', '=', $value)
        ->Orwhere('xstreetname', '=', $value)
        ->Orwhere('location', '=', $value)
        ->get();
        return response()->json($data);
    }

    public function byId($id)
    {
        $crimes = Crimes::where('_id','=', $id)->get();

        if(count($crimes) < 1){
            return response()->json("Id not found",404);
        }
        
        return response()->json($crimes,200);
    }

    public function byCompnos($compnos)
    {
        $compnos = urldecode($compnos);
        $crimes = Crimes::where('compnos','=', intval($compnos))->get();

        if(count($crimes) < 1){
            return response()->json("Compnos not found",404);
        }
        
        return response()->json($crimes,200);
    }

    public function byWeapon($weapon)
    {
        $weapon = urldecode($weapon);
        $crimes = Crimes::where('weapontype','=',$weapon)->get();

        if(count($crimes) < 1){
            return response()->json("Weapon not found",404);
        }

        return response()->json($crimes,200);
    }

    public function byStreet($street)
    {
        $street = urldecode($street);
        $crimes = Crimes::where('streetname','=',$street)->get();

        if(count($crimes) < 1){
            return response()->json("Street not found",404);
        }

        return response()->json($crimes,200);
    }

    public function byType($type)
    {
        $type = urldecode($type);
        $crimes = Crimes::where('incident_type_description','=',$type)->get();

        if(count($crimes) < 1){
            return response()->json("Type not found",404);
        }

        return response()->json($crimes,200);
    }

    public function byMonth($month)
    {
        $month = urldecode($month);
        $crimes = Crimes::where('month','=',intval($month))->get();

        if(count($crimes) < 1){
            if($month < 1 || $month > 12){
                return response()->json("Month doesn't exist",404);
            }
            
            if($month >= 1 || $month <= 12){
                return response()->json("Month not found",404);
            }
        }

        return response()->json($crimes,200);
    }

    public function byDay($day)
    {
        $day = urldecode($day);
        $crimes = Crimes::where('day_week','=',$day)->get();

        if(count($crimes) < 1){
            return response()->json("Day not found",404);
        }

        return response()->json($crimes, 200);
    }

    public function byUcrpart($ucrpart)
    {
        $ucrpart = urldecode($ucrpart);
        $crimes = Crimes::where('ucrpart','=',$ucrpart)->get();

        if(count($crimes) < 1){
            return response()->json("Ucrpart not found",404);
        }

        return response()->json($crimes, 200);
    }

    public function byNature($nature)
    {
        $nature = urldecode($nature);
        $crimes = Crimes::where('naturecode','=',$nature)->get();

        if(count($crimes) < 1){
            return response()->json("Nature Code not found",404);
        }

        return response()->json($crimes, 200);
    }
    
    public function byDistrict($district)
    {
        $district = urldecode($district);
        $crimes = Crimes::where('reptdistrict','=',$district)->get();

        if(count($crimes) < 1){
            return response()->json("District not found",404);
        }

        return response()->json($crimes, 200);
    }

    public function createCrime(Request $request)
    {

        $validator = \Validator::make($request->all(), [
            'compnos' => 'required|integer',
            'naturecode' => 'required|string|max:50',
            'incident_type_description' => 'required|string|max:50',
            'main_crimecode' => 'required|string|max:50',
            'reptdistrict' => 'required|string|max:50',
            'reportingarea' => 'required|integer|digits:1',
            'fromdate' => 'required|string|max:50',
            'weapontype' => 'required|string|max:50',
            'shooting' => 'required|string',
            'domestic' => 'required|string',
            'shift' => 'required|string|max:50',
            'year' => 'required|integer|digits:4',
            'month' => 'required|integer',
            'day_week' => 'required|string|max:15',
            'ucrpart' => 'required|string|max:255',
            'x' => 'required|numeric',
            'y' => 'required|numeric',
            'streetname' => 'required|string|max:50',
            'xstreetname' => 'required|string|max:50',
            'location' => 'required|string|max:50',
        ]);

        if ($validator->fails()) {
            return $validator->errors();;
        }

        $crimes = Crimes::create($request->all());

        return response()->json([$crimes,201]);
    }

    public function deleteCrime(Request $request)
    {
        $id = $request->id;

        try {
            $crime = Crimes::findOrFail($id);
        } catch(ModelNotFoundException $ex) {
            return response()->json("Id doesn't exist", 404);
        }

        $crime->delete();
        
        return response()->json(["Id: ". $id." deleted succefully",200]);
    }
}
