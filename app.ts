import { JuegoDeCasino } from "./JuegoDeCasino";
import { Ruleta } from "./Ruleta";
import { Poker } from "./Poker";
import { Casino } from "./Casino";
enum ubicacion{
    "1°Piso"=0,
    "2°Piso"=1,
   "3°Piso Salon VIP"=2
   };
const juego1 = new JuegoDeCasino("poker","Apuestas Mayores",6);

const casino1Piso = new Casino("Casino General 1", "General", 10,0 , false, false, true);
const casino2Piso = new Casino("Casino General 2", "General", 10,1 , false, false, true);
const casino3Piso = new Casino("Casino VIP 3", "Exclusiva", 12, 2, true, true, false);

const rul1 = new Ruleta("Ruleta","Apuestas menores", 10, true);

const pokerDeLasEstrellas = new Poker("FamousGame", "Apuestas Mayores",6, true );

casino3Piso.getInfo(casino3Piso);
pokerDeLasEstrellas.getInfoPoker(pokerDeLasEstrellas);
pokerDeLasEstrellas.jugarPoker(100,50,false);
pokerDeLasEstrellas.apostar(false, 100);

console.log(casino3Piso.getInfo(casino3Piso));
