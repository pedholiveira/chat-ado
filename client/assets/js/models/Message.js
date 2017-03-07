class Message {
    constructor(user, id, from, to, data) {
        this._user  = user;
        this._id    = id;
        this._from  = from;
        this._to    = to;
        this._data  = data;
    }

    get id() {
        return this._id;
    }

    get from() {
        return this._from;
    }

    get to() {
        return this._to;
    }

    get data() {
        return this._data;
    }

    get style() {
        return this._from == this._user ? 'enviada' : 'recebida'
    }
}