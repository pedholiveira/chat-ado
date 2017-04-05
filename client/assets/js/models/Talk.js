class Talk {
	constructor(user, messages = new Messages()) {
		this._user = user;
		this._messages = messages;
	}

	get user() {
		return this._user;
	}

	get messages() {
		return this._messages;
	}
}
