<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Http\Requests\StoreOrganizationRequest;
use App\Http\Requests\UpdateOrganizationRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $organizations = $user->organizations;
        return response()->json(['organizations' => $organizations], 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrganizationRequest $request)
    {
        //get user
        $user = Auth::user();

        //create organization and save org
        $org = Organization::create($request->validated());

        //create pivot table row
        $org->users()->attach($user->id,['role'=>'organization_admin']);
        return response()->json(['message' => 'Organization created','organization'=>$org],200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrganizationRequest $request, Organization $organization)
    {
        $validated = $request->validate([
            'name' => 'required|unique:mockOrganizations|max:255',
            'description' => 'required|unique:mockOrganizations|max:255',
        ]);
        $organization->update($validated);

        return response()->json(['message' => 'Organization updated','organization'=>$organization],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        $organization->users()->detach();
        $organization->delete();
        return response()->json(['message' => 'Organization deleted','organization'=>$organization],200);
    }
}
