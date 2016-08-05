import angular from 'angular';

function footer() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: require('../components/footer.component.html')
    }
}

export default angular.module('directives.footer', [])
    .directive('pageFooter', footer)
    .name;
