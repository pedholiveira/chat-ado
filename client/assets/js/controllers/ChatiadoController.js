class ChatiadoController {
    constructor() {
        let $ = document.querySelector.bind(document);

	this._inputUser = $('.caixa-busca input');

        this._inputMessage = $('textarea');
        this._inputMessage.focus();

        this._selectedUser = $('.caixa-conversa .contato');

	this._messagesView = new MessagesView($('.caixa-conversa ul'));

        this._usersView = new UsersView($('.lista-contatos'));

	this._openedTalk = new Talk(new User('Sistema'));
	this._talks = new Talks();
	this._talks.add(this._openedTalk);
	this._usersView.update(this._talks.users);

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

	addUser(event) {
		let userName = this._inputUser.value;
		this._talks.add(new Talk(new User(userName)));
		this._usersView.update(this._talks.users);
		//limpar campo e input
		this._cleanForm();
		this._inputUser.value = '';
	}	

    selectUser(event) {
	let userName = event.target.querySelector('span').textContent;
	this._openedTalk = this._talks.getTalk(new User(userName));
	this._messagesView.update(this._openedTalk.messages);
	this._selectedUser.innerHTML = event.target.innerHTML;
    }

    addMessage(event) {
        event.preventDefault();

        let message = new Message(this._userName, this._openedTalk.messages.lastNumber, this._userName, this._openedTalk.user.name, this._inputMessage.value);
        this._openedTalk.messages.add(message);
        this._messagesView.update(this._openedTalk.messages, 'enviada');
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
			data.data.forEach(m => {
				let message = new Message(this._userName, data.msgNr, m.src, this._userName, m.data);
				let talk = this._talks.getTalk(new User(m.src));
				if(!talk) {
					talk = new Talk(new User(m.src));
					this._talks.add(talk);
					this._usersView.update(this._talks.users);
				}
				talk.messages.add(message);
				if(this._openedTalk === talk) {
					this._messagesView.update(this._openedTalk.messages);
				}
			});
		}
        });

	setInterval(() => {
		socket.emit('data', {
			"cmd": "receber",
			"id": this._userName,
			"msgNr": 0
		});
	}, 5000);

        return socket;
    }
}
