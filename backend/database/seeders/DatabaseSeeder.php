<?php

namespace Database\Seeders;

use App\Models\Organization;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create users
        $org1User = User::factory()->create([
            'email' => 'org1@test.com',
        ]);

        $org2User = User::factory()->create([
            'email' => 'org2@test.com',
        ]);

        // Create mockOrganizations
        $org1 = Organization::factory()->create([
            'name' => 'Org 1',
        ]);

        $org2 = Organization::factory()->create([
            'name' => 'Org 2',
        ]);

        // Attach users as organization_admin in pivot
        $org1->users()->attach($org1User->id, ['role' => 'organization_admin']);

        $org2->users()->attach($org2User->id, ['role' => 'organization_admin']);
    }
}
