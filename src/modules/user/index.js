import anugular from 'angular'
import uirouter from 'angular-ui-router'
import cookies from 'angular-cookies'
import routing from './routes'
import api from '../../api.config'


export default angular.module('app.login', [uirouter, cookies])
    .config(routing)
    .constant('API_CONFIG', api)
    .controller('LoginController', LoginController)
    .name;
