alt.application = 'medrec_mobile';
alt.title = 'Ringkasan Medical Record Mobile';
alt.client = 'Yayasan Kesehatan Telkom';
alt.version = 'v2';
alt.environment = 'production';
alt.urlArgs = alt.environment == 'production' ? '_v=' + alt.version : '_t=' + (+new Date());
alt.timeout = 30000;

// advanced configuration
alt.run([
    '$log', '$q', '$rootScope', '$auth', '$api', '$route', '$window', '$timeout', '$ionicPlatform', '$ionicHistory',
    function($log, $q, $rootScope, $auth, $api, $route, $window, $timeout, $ionicPlatform,$ionicHistory){


    }
]);