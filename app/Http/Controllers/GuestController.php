<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }

    public function spandex(){
        $users = User::search('Alb~')->get();
        dd($users);
    }
}
