import angular from 'angular';

function sidebar() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: require('../components/sidebar.component.html')
    }
}

export default angular.module('directives.sidebar', [])
    .directive('sidebar', sidebar)
    .name;
