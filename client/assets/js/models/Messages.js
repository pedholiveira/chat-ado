class Messages {
    constructor() {
        this._messages = [];
    }

    add(message) {
        this._messages.push(message);
    }

    get messages() {
        return [].concat(this._messages);
    }

    get lastNumber() {
        if (this._messages.length > 0)
            return this._messages[this._messages.length-1].id;
        return 2;
    }
}