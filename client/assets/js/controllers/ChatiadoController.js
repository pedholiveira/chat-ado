class ChatiadoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputMessage = $('textarea');
        this._inputMessage.focus();

        this._messages = new Messages();
        this._messagesView = new MessagesView($('.caixa-conversa ul'));

        this._users = new Users();
        this._usersView = new UsersView($('.contatos ul'));

        //refatorar
        this._socket    = this._configSocket();
        this._userName  = username;
    }

    _cleanForm() {
        this._inputMessage.value = '';
        this._inputMessage.focus();
    }

    _sendMessage(message) {
        this._socket.emit('data', {
            "cmd": "enviar",
            "id": message.from,
            "dst": message.to,
            "data": message.data,
            "msgNr": message.id
        }); 
    }

    addMessage(event) {
        event.preventDefault();

        let message = new Message(this._userName, this._messages.lastNumber, this._userName, '0', this._inputMessage.value);
        this._messages.add(message);
        this._messagesView.update(this._messages, 'enviada');
        this._sendMessage(message);

        this._cleanForm();
    }

    _configSocket() {
        let socket = io('http://localhost:80');
        socket.on('connect', () => {
            socket.emit('data', {
                "cmd": "login",
                "id": this._userName,
                "msgNr": 1
            });
        });
        socket.on('data', data => {
            if (data.data) {
                let message = new Message(this._userName, data.ack, data.id, this._userName, data.data)
                this._messages.add(message);
                this._messagesView.update(this._messages, 'recebida');
            }
        });
        return socket;
    }
}