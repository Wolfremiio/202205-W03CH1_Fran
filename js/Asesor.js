import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    asesora;
    message;
    constructor(name, age, family, asesora) {
        super(name, age, family);
        this.asesora = asesora;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
}
