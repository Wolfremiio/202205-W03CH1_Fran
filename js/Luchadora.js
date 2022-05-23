import { Personaje } from './Personaje.js';

export class Luchadora extends Personaje {
    arma;
    destreza;
    message;
    constructor(name, age, family, arma, destreza) {
        super(name, age, family);
        this.arma = arma;
        this.destreza = destreza;
        this.message = 'Primero pego y luego pregunto';
    }
}
