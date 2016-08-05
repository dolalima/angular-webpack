import angular from 'angular'

class UserService {
    constructor($http, $rootScope, API_CONFIG) {
        this.$http = $http
        this.$rootScope = $rootScope
        this.API_CONFIG = API_CONFIG
    }

    GetAll() {
        return $http.get(this.API_CONFIG.url + '/users').then(this.handleSuccess, this.handleError('Error getting all users'));
    }

    GetById(id) {
        return $http.get(this.API_CONFIG.url + '/users/' + id).then(this.handleSuccess, handleError('Error getting user by id'));
    }

    GetByUsername(username) {
        return $http.get(this.API_CONFIG.url + '/users/byUser/' + username).then(this.handleSuccess, this.handleError('Error getting user by username'));
    }

    Create(user) {
        return $http.post(this.API_CONFIG.url + '/users', user).then(this.handleSuccess, this.handleError('Error creating user'));
    }

    Update(user) {
        return $http.put(this.API_CONFIG.url + '/users/' + user.id, user).then(this.handleSuccess, this.handleError('Error updating user'));
    }

    Delete(id) {
        return $http.delete(this.API_CONFIG.url + '/users/' + id).then(this.handleSuccess, this.handleError('Error deleting user'));
    }

    // private functions

    handleSuccess(res) {
        return res.data;
    }

    handleError(error) {
        return function () {
            return {success: false, message: error};
        };
    }
}

export default angular.module('services.user', [])
    .service('userService', UserService)
    .name;

UserService.$inject = ['$http', '$rootScope', 'API_CONFIG'];


