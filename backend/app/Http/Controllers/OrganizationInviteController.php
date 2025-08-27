<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\OrganizationInvite;
use Illuminate\Http\Request;

class OrganizationInviteController extends Controller
{
    public function create(Request $request){
        $validated = $request->validate([
            'organization_id' => 'required|exists:organizations,id',
        ]);
        $orgInvite = OrganizationInvite::create([
            'organization_id' => $validated['organization_id'],
        ]);
        return response()->json(['invite' => $orgInvite],200);
    }
    public function accept(Request $request, OrganizationInvite $invite){
        //add a pivot to the requesting user
        // Auth::user()->attach($invite->organization_id)
        return response()->json(['message' => 'Organization accepted','invite'=>$invite],200);
    }
}
