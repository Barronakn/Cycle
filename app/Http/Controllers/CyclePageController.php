<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CyclePageController extends Controller
{
    public function index()
    {
        return Inertia::render("CyclePage");
    }
}
