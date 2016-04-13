alt.application = 'academy';
alt.title = 'Akhdani Academy';
alt.client = 'PT. Akhdani Reka Solusi';
alt.version = 'v2';
alt.environment = 'production';
alt.urlArgs = alt.environment == 'production' ? '_v=' + alt.version : '_t=' + (+new Date());

// advanced configuration
alt.run([
    '$log', '$q', '$rootScope', '$auth', '$api', '$route', '$window', '$timeout',
    function($log, $q, $rootScope, $auth, $api, $route, $window, $timeout){


    }
]);