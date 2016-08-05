import angular from 'angular'

class AuthenticationService {

    constructor($http, $cookieStore, $rootScope, $timeout, API_CONFIG) {
        this.$http = $http
        this.$cookieStore = $cookieStore
        this.$rootScope = $rootScope
        this.$timeout = $timeout
        this.API_CONFIG = API_CONFIG
    }


    Login(username,password, callback) {

        this.$http.post(this.API_CONFIG.url + '/oauth/access_token', {
                username: username,
                password: password,
                client_id: this.API_CONFIG.client_id,
                client_secret: this.API_CONFIG.client_secret,
                grant_type: this.API_CONFIG.grant_type

            })
            .success(function (response) {
                callback(response);
            });

    }

    SetCredentials(username, token) {
        var authdata = token

        this.$rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        this.$http.defaults.headers.common['Authorization'] = "Bearer " + authdata; // jshint ignore:line
        this.$cookieStore.put('globals', this.$rootScope.globals);
    }

    ClearCredentials() {
        this.$rootScope.globals = {};
        this.$cookieStore.remove('globals');
        this.$http.defaults.headers.common.Authorization = '';
    }
}

export default angular.module('services.auth', [])
    .service('authenticationService', AuthenticationService)
    .name;

AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'API_CONFIG'];


