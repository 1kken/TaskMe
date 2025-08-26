<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Organization extends Model
{
    /** @use HasFactory<\Database\Factories\OrganizationFactory> */
    use HasUuids,HasFactory;

    protected $fillable = ['name', 'description'];

    public function projects(): BelongsToMany{
        return $this->belongsToMany(Project::class, 'organization_project', 'organization_id', 'project_id');
    }

    public function users():belongsToMany{
        return $this->belongsToMany(User::class, 'organization_user', 'organization_id', 'user_id');
    }
}
