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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

for(let i=0; i<favMovies.length;i++){
    if(favMovies[i] === "Titanic")
        console.log("Index of Titanic is "+i);
}

favMovies.sort();
//yes it did alter the original array
console.log(favMovies);

favMovies.pop();
console.log(favMovies);

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

favMovies.reverse();
console.log(favMovies);

let movie = favMovies.shift();
console.log(favMovies);
console.log(movie);

let movie1 = favMovies.unshift("Shubha");
console.log(movie1);
console.log(favMovies);

let index = favMovies.indexOf("Django Unchained");

console.log(favMovies);
favMovies.splice(index,1,"Avatar");
console.log(favMovies);
numSlice = Math.ceil((favMovies.length)/2);

console.log(favMovies.slice(numSlice));
console.log(favMovies);
let indexFF = favMovies.indexOf("Fast and Furious");
console.log("Index of Fast & Furious is: " +indexFF);

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

console.log(whereIsWaldo);

whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

let string = "Love me, pet me! HSSSSSS!"
kittenTalkArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."]

for (let i=1; i<=20; i++){
    if(i%2 === 0){
        console.log((kittenTalkArray[Math.floor(Math.random()*3)]));
    }
    else
    console.log(string);
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15];

//for finding median, first we have to sort the array
nums.sort();
console.log(nums);
//to find the middle index
let len = Math.ceil(nums.length/2);
console.log(len);
    if(nums.length%2 === 0){
        //if even elements in array then we find average of two middle elements
         console.log((nums[len]+nums[len+1])/2);
    }
    else {
        //if odd elements in array then middle number wud be median.
        console.log(nums[len]);
    }


////////////////////////////////
//  Extra Practice
////////////////////////////////


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(kristynsCloset,thomsCloset);
  kristynsShoe = kristynsCloset.shift();
  thomsCloset[2].push(kristynsShoe);
  console.log(kristynsCloset,thomsCloset);

  console.log(`Kristyn Day 1 outfit wud be ${kristynsCloset[2]} and ${kristynsCloset[3]} with ${kristynsCloset[0]}`);
  console.log(`Kristyn Day 2 outfit wud be ${kristynsCloset[2]} and ${kristynsCloset[3]} with ${kristynsCloset[4]}`);
  console.log(`Kristyn Day 3 outfit wud be ${kristynsCloset[2]} and ${kristynsCloset[3]} with ${kristynsCloset[5]}`);

  console.log(`Thom's Day 1 outfit wud be ${thomsCloset[0][1]} and ${thomsCloset[1][0]} with ${thomsCloset[2][0]}`);
  console.log(`Thom's Day 2 outfit wud be ${thomsCloset[0][2]} and ${thomsCloset[1][2]} with ${thomsCloset[2][1]}`);
  console.log(`Thom's Day 3 outfit wud be ${thomsCloset[0][3]} and ${thomsCloset[1][1]} with ${thomsCloset[2][2]}`);
