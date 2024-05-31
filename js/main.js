import {personaje} from "./personaje.js";
import {mago} from "./mago.js";
import {guerrero} from "./guerrero.js";

let personajeDefault = new personaje();
let personajeGuerrero = new guerrero("Manuel");
let personajeMago1 = new mago("Merlina");



console.log(personajeDefault);
console.log(personajeGuerrero);
console.log(personajeMago1);