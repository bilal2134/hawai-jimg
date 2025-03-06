@extends('layouts.app')

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
@endsection

@section('content')
<div>
    <!-- HTML Markup -->
    <div class="background"></div>
    
    <div class="login-container">
        <div class="logo">
            <!-- Replace with your actual logo path -->
            <img src="{{ asset('logo.png') }}" alt="Company Logo">
        </div>
        
        <div class="form-container">
            <form>
                <div class="input-group">
                    <label for="userid">User ID</label>
                    <input type="text" id="userid" placeholder="Enter Your User ID">
                </div>
                
                <div class="input-group">
                    <label for="password">Enter Your Password Here*</label>
                    <input type="password" id="password" placeholder="Password">
                    <!-- Icon will be inserted dynamically -->
                    <span class="password-toggle" onclick="togglePassword()"></span>
                </div>
                
                <button type="submit" class="submit-btn">Submit</button>
            </form>
            
            <div class="error-message">Please enter your login information</div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script src="{{ asset('js/login.js') }}"></script>
@endsection
