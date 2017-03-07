class UsersView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        return `<ul>
                    ${model.user.map(u => 
                        `<li>${u.name}</li>`
                    ).join('')}
                </ul>`;
    }
}