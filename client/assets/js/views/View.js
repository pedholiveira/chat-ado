class View {
    constructor(element) {
        this._element = element;
    }

    template(model) {
        throw new Erro('Must be implemented!');
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }
}