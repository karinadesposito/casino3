import { Poker } from "./Poker";
import { Ruleta } from "./Ruleta";

enum ubicacion{
 "1°Piso",
 "2°Piso",
"3°Piso Salon VIP"
};

export class Casino {
    private ubicacion:ubicacion;
    private apuestaMinima:boolean;


    constructor(nombre:string, categoria:string, cantMaxJugadores:number, 
        ubicacion:ubicacion, apuestaMinima:boolean, aceptaEfectivo:boolean, aceptaPublico:boolean) {
        this.ubicacion=ubicacion;
        this.apuestaMinima=apuestaMinima;        
    }
    getInfo(casino:Casino){
        return this;        
    }
}