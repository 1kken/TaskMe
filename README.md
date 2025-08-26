# TaskMe

**Project & Task Management System with Role-Based Access Control (RBAC)**

---

## Overview

TaskMe is a web-based task and project management application designed to help mockOrganizations manage projects, tasks, and team members efficiently while enforcing role-based access control. The system ensures that each user sees and interacts only with the data they are allowed to access.

---

## Roles

- **Super Admin** – Manages the entire app (users, roles, permissions).
- **Organization Admin** – Creates and manages projects within their organization and assigns roles to users.
- **Project Manager** – Creates tasks, assigns team members, and tracks project progress.
- **Team Member** – Works on tasks and updates their status.
- **Client** – Can view progress of their assigned projects (read-only).

---

## Core Features

- **Authentication & RBAC:**
    - Laravel Sanctum for SPA authentication
    - Role-based access using Spatie Laravel-Permission

- **Organization & Project Management:**
    - Admins create mockOrganizations and projects
    - Users can belong to multiple mockOrganizations

- **Task Management:**
    - Project Managers create and assign tasks
    - Tasks have status tracking: To-do → In Progress → Done

- **Client Portal:**
    - Clients can log in to see project progress in a read-only view

- **Notifications & Dashboard:**
    - Email/DB notifications for task updates
    - Role-based dashboards showing relevant data per role

---

## Tech Stack

- **Backend:** Laravel 12 (API + SPA)
- **Frontend:** React SPA with React Router
- **Authentication:** Laravel Sanctum (cookie-based SPA auth)
- **Database:** MySQL
- **Roles & Permissions:** Spatie Laravel-Permission  