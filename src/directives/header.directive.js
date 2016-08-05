import angular from 'angular';

function header() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: require('../components/header.component.html')
    }
}

export default angular.module('directives.header', [])
    .directive('pageHeader', header)
    .name;
