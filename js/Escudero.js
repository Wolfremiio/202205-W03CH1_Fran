import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
    servidor;
    pelotismo;
    message;
    constructor(name, age, family, condition, servidor, pelotismo) {
        super(name, age, family, condition);
        this.servidor = servidor;
        this.pelotismo = pelotismo;
        this.message = 'Soy un loser';
    }
}
