import { JuegoDeCasino } from "./JuegoDeCasino";

export class Poker extends JuegoDeCasino {
        private aceptaEfectivo:boolean;
      
        constructor (nombre:string, categoria:string, cantMaxJugadores:number, 
                        aceptaEfectivo:boolean){
                            super(nombre,categoria,cantMaxJugadores)
                                this.aceptaEfectivo=true;
        }
        
                 public jugarPoker (juegoParticipante:number, juegoCroupier:number, resultadoGanador:boolean ){
                    if(juegoParticipante>juegoCroupier){
                         resultadoGanador===true;
                            console.log("Crack ganaste! estás de suerte");
                    }else{
                        console.log("Retirate antes de perder la dignidad");                    
                         }              
                   }
            
                 public apostar(resultadoGanador:boolean, fichas:number){
                    if(resultadoGanador === true){
                         let premio:number = fichas*36;
                            console.log("ud ganó",premio, "fichas");
                    }else{
                         console.log("ud perdió todo");           
                        }
                    }
                 getInfoPoker(poker:Poker) {
                    return this            
                    }

}