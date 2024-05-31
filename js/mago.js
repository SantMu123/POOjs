import { personaje } from "./personaje.js";
export class mago extends personaje {
    constructor(nom){
        super();
        this.setNombre = nom;
        this.setVida = 15;
    }
}