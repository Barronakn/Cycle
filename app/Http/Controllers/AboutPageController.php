<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutPageController extends Controller
{
    public function index()
    {
        return Inertia::render("AboutPage");
    }
}
