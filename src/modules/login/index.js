import anugular from 'angular'
import uirouter from 'angular-ui-router'
import cookies from 'angular-cookies'
import routing from './routes'
import api from '../../api.config'

import LoginController from './login.controller'
//services
import flashService from '../../services/flash.service'
import userService from '../../services/user.service'
import authenticationService from '../../services/authentication.service'


export default angular.module('app.login', [uirouter, cookies, authenticationService, userService, flashService])
    .config(routing)
    .constant('API_CONFIG', api)
    .controller('LoginController', LoginController)
    .name;
