define([
    'component/alt/alert'
], function(){
    return [
        '$scope', '$routeParams', '$log', '$rootScope', '$timeout', '$auth', '$alert', '$location', '$ionicHistory',
        function($scope, $routeParams, $log, $rootScope, $timeout, $auth, $alert,$location,$ionicHistory){
            $rootScope.redirect($auth.islogin() ? 'home' : 'auth/login');

        }
    ];
});