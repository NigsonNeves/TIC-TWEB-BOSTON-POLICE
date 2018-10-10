<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class UserController extends Controller
{

    public function showAllUsers()
    {
        return response()->json(User::all());
    }

    public function showOneUser($id)
    {
        try {
            $user = User::findOrFail($id);
        } catch(ModelNotFoundException $ex) {
            return response()->json("user doesn't exist", 404);
        }
        return response()->json($user);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'grade' => 'required|string|in:agent,detective,chef',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $user = User::create([
            'grade' => $request->grade,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json($user, 201);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
            'grade' => 'string|in:agent,detective,chef',
            'email' => 'email|unique:users',
            'confirmed' => 'boolean'
        ]);

        try {
            $user = User::findOrFail($id);
        } catch(ModelNotFoundException $ex) {
            return response()->json("user doesn't exist", 404);
        }
        $user->update([
            'grade' => $request->grade != null ? $request->grade : $user->grade,
            'email' => $request->email != null ? $request->email : $user->email,
            'password' => $request->password != null ? $request->password : $user->password,
            'confirmed' => $request->confirmed != null ? $request->confirmed : $user->confirmed
        ]);

        return response()->json($user, 200);
    }

    public function validateUser($id, Request $request)
    {
        $this->validate($request, [
            'idAdmin' => 'required',
        ]);
        try {
            $userAdmin = User::findOrFail($request->idAdmin);
        } catch(ModelNotFoundException $ex) {
            return response()->json("admin doesn't exist", 404);
        }
        if (($userAdmin->grade == "detective" || $userAdmin->grade == "chef") && $userAdmin->confirmed){
            try {
                $user = User::findOrFail($id);
            } catch(ModelNotFoundException $ex) {
                return response()->json("user doesn't exist", 404);
            }
            $user->update([
                    'confirmed' => 1
                ]);
    
            return response()->json($user, 200);
        } else {
            return response()->json("user unauthorized", 401);
        }
    }

    public function delete($id)
    {
        try {
            $user = User::findOrFail($id);
        } catch(ModelNotFoundException $ex) {
            return response()->json("user doesn't exist", 404);
        }
        $user->delete();
        return response('Deleted Successfully', 200);
    }
}