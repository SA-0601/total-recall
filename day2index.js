////////////////////////////////
// Easy Going
////////////////////////////////

/*
console.log("Numbers from 1 to 20 :")
for (i=0; i<=20; i++){
   console.log(i);
}
*/

////////////////////////////////
// Get Even
////////////////////////////////
/*
console.log("Even Numbers from 0 to 200 :")
for (i=0; i<=200; i+=2){
    console.log(i);
}
*/
////////////////////////////////
// Fizz Buzz
////////////////////////////////
/*
for(i=1; i<=100; i++){
    if(i%3 === 0 && i%5 === 0){
    console.log("FizzBuzz")
    }
    else if (i%3 === 0){
        console.log("Fizz");
    }   
    else if (i%5 === 0){
        console.log("Buzz");
    }
    else
        console.log(i);
}
*/

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee's array to reflect her being a year older
plantee[2] += 1;

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
wolfy[3] = "Gotham City";

//Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");

//Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.splice(0,1,"Gameboy");
wolfy.shift();
wolfy.unshift("Gameboy");

//display changed arrays
console.log(wolfy);
console.log(plantee);
console.log(dart);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let i of ninjaTurtles) {
    i = i.toUpperCase();
    console.log(i);
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
