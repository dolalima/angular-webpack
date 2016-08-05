import angular from 'angular'
import uirouter from 'angular-ui-router'
import routing from './routes'
//
import HomeController from './home.controller'
//
import randomNames from '../../services/randomNames.service'
import greeting    from '../../directives/greeting.directive'

// DI
import header from '../../directives/header.directive'
import footer from '../../directives/footer.directive'
import sidebar from '../../directives/sidebar.directive'


export default angular.module('app.home', [uirouter, randomNames, greeting,header,footer,sidebar])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
