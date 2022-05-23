import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './luchador.js';
import { Luchadora } from './Luchadora.js';
import { Rey } from './Rey.js';

const p1 = new Rey('Rey', 48, ' Baratheon', 1);
const p2 = new Luchador('Jon Nieve', 32, 'Stark', 'Espada', '9');
const p3 = new Asesor('Jorah Mormont', 39, 'Mormont', p2);
const p4 = new Escudero('Bron', 26, 'Lanister', p2, '7');
const p5 = new Luchadora('Daenerys', 36, 'Targaryen', 'Espada', '9');
export const array = [p1, p2, p3, p4, p5];
