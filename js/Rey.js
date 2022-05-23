import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    reinado;
    message;
    constructor(name, age, family, reinado) {
        super(name, age, family, reinado);
        this.reinado = reinado;
        this.message = 'Vais a morir todos';
    }
}
