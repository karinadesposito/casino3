import { JuegoDeCasino } from "./JuegoDeCasino";

export class Ruleta extends JuegoDeCasino {
    private aceptaPublico: boolean;
       
    
    constructor (nombre:string, categoria:string, cantMaxJugadores:number, 
        aceptaPublico:boolean){

        super(nombre,categoria,cantMaxJugadores)
        this.aceptaPublico=true;
            }
    
            public tirarLaBola (bolaEnNumero:number){
                bolaEnNumero<37 || bolaEnNumero===0
                     bolaEnNumero = bolaEnNumero;
                        console.log(bolaEnNumero);  
            }        
            public apostar(fichas:number, bolaEnNumero:number, numeroApostado:number){
                if(numeroApostado === bolaEnNumero){
                    const premio:number = fichas*36;
                         console.log("ud levantó un pleno y ganó",premio, "fichas");
            }else{
               console.log("ud no levanta ni tierra");           
                }
            } 
            getInfoRuleta(ruleta:Ruleta): Ruleta {
            return this            
            }    

    }


