
export default class LoginController {
    constructor($location, authenticationService,flashService) {
        this.dataLoading = false
        this.username =''
        this.password = ''
        this.$location = $location
        this.AuthenticationService = authenticationService
        this.FlashService = flashService
        this.AuthenticationService.ClearCredentials()
    }

    login() {
        var self = this
        console.debug(this.username)
        this.dataLoading = true
        this.AuthenticationService.Login(this.username,this.password, function (response) {
            console.debug(response)
            if (response.access_token) {
                self.AuthenticationService.SetCredentials(self.username, response.access_token)
                self.$location.path('/')
            } else {
                self.FlashService.Error(response.message);
            }
        })
        this.dataLoading = false
    }


}

LoginController.$inject = ['$location', 'authenticationService', 'flashService'];