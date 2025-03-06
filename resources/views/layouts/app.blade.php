<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Laravel App</title>
    @livewireStyles
    @yield('styles')
</head>
<body>
    @yield('content')
    
    @yield('scripts')
    @livewireScripts
</body>
</html>
