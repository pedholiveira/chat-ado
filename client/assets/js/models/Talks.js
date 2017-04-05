class Talks {
	constructor() {
		this._talks = [];
	}

	get talks() {
		return this._talks;
	}

	get users() {
		return new Users(this._talks.map(talk => talk.user));
	}

	add(talk) {
		this._talks.push(talk);
	}

	getTalk(user) {
		return this._talks.filter(talk => talk.user.name === user.name)[0];
	}
}
