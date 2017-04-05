class Users {
    constructor(users = []) {
        this._users = users;
    }

    add(user) {
        this._users.push(user);
    }

    get users() {
        return [].concat(this._users);
    }
}
