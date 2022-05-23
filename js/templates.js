import { Asesor } from './Asesor';
import { Escudero } from './Escudero';
import { Luchador } from './luchador';
import { Luchadora } from './Luchadora';
import { Rey } from './Rey';

export function character(personajes) {
    let statePersonaje = '';
    if (personajes.state === 'Alive') {
        statePersonaje = `<i class="fas fa-thumbs-up"></i>`;
    } else {
        statePersonaje = `<i class="fas fa-thumbs-down"></i>`;
    }
    let list = '';
    if (personajes instanceof Rey) {
        list = `<li>Años de reinado: ${personajes.reinado}</li>`;
    }
    if (personajes instanceof Luchador) {
        list = `<li>Arma: ${personajes.arma}</li>``<li>Destreza: ${personajes.destreza}</li>`;
    }
    if (personajes instanceof Luchadora) {
        list = `<li>Arma: ${personajes.arma}</li>``<li>Destreza: ${personajes.destreza}</li>`;
    }
    if (personajes instanceof Escudero) {
        list = `<li>Servidor: ${personajes.servidor}</li>``<li>Pelotismo: ${personajes.pelotismo}</li>`;
    }
    if (personajes instanceof Asesor) {
        list = `<li>Asesora: ${personajes.asesora}</li>`;
    }

    return ` <li class="character col">
    <div class="card character__card">
      <img
        src="img/no-one.jpg"
        alt="Nombre y familia del personaje"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">Nombre y familia</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: X años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Años de reinado: X</li>
            <li>Arma: XXX</li>
            <li>Destreza: X</li>
            <li>Peloteo: X</li>
            <li>Asesora a: X</li>
            <li>Sirve a: X</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`;
}
