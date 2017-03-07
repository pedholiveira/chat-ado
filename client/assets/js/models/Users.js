class Users {
    constructor() {
        this._users =[];
    }

    add(user) {
        this._users.push(user);
    }

    get users() {
        return [].contat(this._users);
    }
}