routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('dachboard.user', {
            url: '/users',
            template: require('./login.html'),
            controller: 'LoginController',
            controllerAs: 'ctl'
        });
}
