class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName(){
        console.log("I am " + this.name);
        return this;
    }
    showStats(){
        console.log("Health:", this.health, "Strength:", this.strength, "Speed:", this.speed);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log("Hiccup, " + this.name + " just drank some Sake");
        return this;
    }
    }
    
    let Nina = new Ninja("Nina");
    Nina.sayName().drinkSake();
    
    class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
                    let wisdom = "'Its what we do with the time that is givin to us'" + " He hiccuped";
                    super.drinkSake();
                    console.log(wisdom);
                    return this;
                    }
    
    showStats(){
        console.log( "Name: " + this.name + " Health:", this.health, "Strength:", this.strength, "Speed:", this.speed);
        return this;
    }
    
    
    }
    let Gandalf = new Sensei("Gandalf");
    Gandalf.showStats().speakWisdom().showStats();
    
    
      