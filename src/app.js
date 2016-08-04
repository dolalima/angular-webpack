import 'bootstrap/dist/css/bootstrap.css'
//import 'font-awesome/css/font-awesome.css'

import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './app.config'
// Modules
import home from './modules/home'
import login from './modules/login'

angular.module('app', [uirouter, home,login])
  .config(routing)
