
export default class UserController{
    var self = this
    constructor(userService) {
        this.users = []
    }


}

UserController.$inject = ['userService']
