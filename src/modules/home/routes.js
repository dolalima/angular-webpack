routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            template: require('../../views/main.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .state('dashboard.home', {
            url: '/home',
            template: require('./home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}
