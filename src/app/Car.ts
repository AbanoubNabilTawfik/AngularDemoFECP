class Tier { //Ahmed
    constructor(numOfTiers:any,model:number) {

    }
}

class Engine {  //Hossam
    engineType:any;
    constructor(engineType:any) {

    }
}
//SOLID
//Open Closed Principle
 //Open for extension
 //closed for modifications
class Car { //Abanoub
    tier: any;
    engine: any;
    constructor(tier:any,engine:any) {
        // this.tier = new Tier();
        // this.engine = new Engine();
        this.engine=engine;
        this.tier=tier;
    }
}

let engine= new Engine("Gaz");
let tier= new Tier(4,2010);
let car = new Car(tier,engine);