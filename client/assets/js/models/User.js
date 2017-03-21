class User {
    constructor(name, friends) {
        this._name = name;
	this._friends = friends;
    }

    get name() {
        return this._name;
    }

    get friends() {
	return this._friends;
    }
}
