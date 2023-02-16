class Hamster {
    constructor(name){
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun(){
        console.log("squeak squeak");
    }

    eatFood(){
        console.log("nibble nibble");
    } 
    
    getPrice(){
        return this.price;
    } 
}

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;  
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }

    greet() {
        console.log(`I am ${this.name} hello`);
    }

    eat(){
        this.weight++;
        this.mood++;
    }

    exercise(){
        this.weight--;
    }

    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }

    buyHamster(hamster){
    
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount = this.bankAccount - hamster.getPrice();
    }
}

const timmy = new Person("Timmy");
for(let i =0; i < 5; i++){
    timmy.ageUp();
  }
  for(let i =0; i < 5; i++){
    timmy.eat();
  }
  for(let i =0; i < 5; i++){
    timmy.exercise();
  }
  for(let i =0; i < 9; i++){
    timmy.ageUp();
  }
  const gus = new Hamster('Gus');
  gus.owner = 'Timmy';
  console.log(timmy);
  timmy.buyHamster(gus);
  
  for(let i =0; i < 15; i++){
    timmy.ageUp();
  }
  timmy.eat();
  timmy.eat();
  timmy.exercise();
  timmy.exercise();

//   console.log(Hamster);
  console.log(timmy);

  class Dinner {
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
  }
  
  class Chef {
    dinners = [];
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    prepareDinner(appetizer,entree,dessert)
    {
        let dinnerOption = new Dinner(appetizer,entree,dessert);
        this.dinners.push(dinnerOption);
        
        return this.dinners;
       
    }
  }

  const chef1 = new Chef("ChefJohn",35);
  chef1.prepareDinner("appetizer1","entree1","dessert1");
  chef1.prepareDinner("appetizer2","entree2","dessert2");
  console.log(chef1);
  console.log(`${chef1.name} is serving us today with:`);
  console.log(chef1.dinners);

  const chef2 = new Chef("ChefVikas",40);
  chef2.prepareDinner("appetizer3","entree3","dessert3");
  chef2.prepareDinner("appetizer4","entree4","dessert4");
  console.log(chef2);

  console.log(`${chef2.name} is serving us today with:`);
  console.log(chef2.dinners);
  