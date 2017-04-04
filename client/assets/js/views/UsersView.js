class UsersView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        return `${model.users.map(u => 
               		`<li onclick="controller.selectUser(event)">
						<div class="contato">
							<div class="imagem">
								<img src="https://robohash.org/${u.name}"/>
							</div>
							<div class="info">
								<span>${u.name}</span>
							</div>
						</div>
					</li>`
                ).join('')}`;
    }
}
