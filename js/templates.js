import { Asesor } from "./Asesor";
import { Escudero } from "./Escudero";
import { Luchador } from "./luchador";
import { Luchadora } from "./Luchadora";
import { Rey } from "./Rey";

export function character(personajes){
    let statePersonaje = '';
    if(personajes.state === 'Alive'){
        statePersonaje = 
    }else{

    }
    let list ='';
    if(personajes instanceof Rey){
        list = `<li>Años de reinado: ${personajes.reinado}</li>`
    }
    if(personajes instanceof Luchador){
        list = `<li>Arma: ${personajes.arma}</li>`
               `<li>Destreza: ${personajes.destreza}</li>`
    }
    if(personajes instanceof Luchadora){
        list = `<li>Arma: ${personajes.arma}</li>`
               `<li>Destreza: ${personajes.destreza}</li>`
    }
    if(personajes instanceof Escudero){
        list = `<li>Servidor: ${personajes.servidor}</li>`
        `<li>Pelotismo: ${personajes.pelotismo}</li>`
    }
    if(personajes instanceof Asesor){
        list = `<li>Asesora: ${personajes.asesora}</li>`
       
    }
}