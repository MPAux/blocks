class Block {
    constructor() {
        this._ocupado = false;
    }

    set ocupado(value) {
        this._ocupado = value;
    }

    get ocupado() {
        return this._ocupado;
    }
}