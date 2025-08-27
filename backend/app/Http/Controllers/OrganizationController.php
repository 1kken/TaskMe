<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Http\Requests\StoreOrganizationRequest;
use App\Http\Requests\UpdateOrganizationRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

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


        //set slug
        $data = $request->validated();
        $data['slug'] = $this->generateUniqueSlug($data['name']);

        //create organization and save organization
        $org = Organization::create($data);

        //create pivot table row
        $org->users()->attach($user->id,['role'=>'organization_admin']);
        return response()->json(['message' => 'Organization created','organization'=>$org],200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrganizationRequest $request, Organization $organization)
    {
        Gate::authorize('update', $organization);

        //set slug
        $data = $request->validated();
        if($organization->name !== $request->name){
            $data['slug'] = $this->generateUniqueSlug($data['name']);
        }
        $organization->update($data);

        return response()->json(['message' => 'Organization updated','organization'=>$organization],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        Gate::authorize('forceDelete', $organization);
        $organization->delete();
        return response()->json(['message' => 'Organization deleted','organization'=>$organization],200);
    }

    function generateUniqueSlug($name)
    {
        $slug = Str::slug($name);
        $originalSlug = $slug;
        $counter = 1;

        // Keep incrementing until it's unique
        while (Organization::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        return $slug;
    }
}
