import angular from 'angular'

class FlashService{

    constructor($rootScope){
        this.$rootScope = $rootScope
        this.initService()
    }

    initService() {
        this.$rootScope.$on('$locationChangeStart', function () {
            clearFlashMessage();
        });

        function clearFlashMessage() {
            var flash = this.$rootScope.flash;
            if (flash) {
                if (!flash.keepAfterLocationChange) {
                    delete this.$rootScope.flash;
                } else {
                    // only keep for a single location change
                    flash.keepAfterLocationChange = false;
                }
            }
        }
    }

    Success(message, keepAfterLocationChange) {
        this.$rootScope.flash = {
            message: message,
            type: 'success',
            keepAfterLocationChange: keepAfterLocationChange
        };
    }

    Error(message, keepAfterLocationChange) {
        this.$rootScope.flash = {
            message: message,
            type: 'error',
            keepAfterLocationChange: keepAfterLocationChange
        };
    }
}

export default angular.module('services.flash', [])
    .service('flashService', FlashService)
    .name;

FlashService.$inject = ['$rootScope'];

