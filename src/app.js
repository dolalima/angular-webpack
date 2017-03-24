require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');
require('font-awesome/css/font-awesome.css');

import angular from 'angular';
import resource from 'angular-resource';
import uirouter from 'angular-ui-router';
import cookies from 'angular-cookies';

import routing from './app.config';
import init from './app.init';
import api from './api.config';
// Modules
import home from './modules/home';
import login from './modules/login';

angular.module('app', [uirouter,cookies, home, login])
    .constant('API_CONFIG',api)
    .config(routing)
    .run(init);
