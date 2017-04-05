class MessagesView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        return `${model.messages.map(m =>
                    `<li>
                        <div class="mensagem ${m.style}">
                            <span>${m.data}</span>
                        </div>
                    </li>`
                ).join('')}`;
    }
}
