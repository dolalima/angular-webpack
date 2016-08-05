import angular from 'angular';

function sidebar() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        templateUrl: 'components/sidebar.component.html'
    }
}

export default angular.module('directives.sidebar', [])
    .directive('sidebar', sidebar)
    .name;
