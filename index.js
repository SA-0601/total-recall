// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
/*
1.How do we assign a value to a variable?  
Answer: With the assignment operator ( i = 5);

2.How do we change the value of a variable?  
Answer: with the assignment operator only (i = 2);

3.How do we assign an existing variable to a new variable? 
Answer: with the assignment operator only (let j = i);

4.Remind me, what are declare, assign, and define? 
Answer: Declaring a variable is just declaring like memory is allocated but value is not assigned (let i)
        Assign is assigning a actual value to a variable (i = 4)
        Defining is assigning value to that memory location

5.What is pseudo coding and why should you do it? 
Answer: Pseudo coding is writing steps of your program in a simple english. We should do it as it gives full understanding 
        before we start coding. So that we will have minimum errors in logic.
6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
Answer: 50% time should be spent in thinking vs actually typing a code as thinking makes you clear th logic you want to build and then
        you can spend 50% time on actual coding

*/

// B. Strings
/*    let firstVariable;
    firstVariable = "Hello World";
    firstVariable = 10;
    let secondVariable = firstVariable;
    secondVariable = "Hello I am Second Variable";
    console.log(firstVariable);
    let yourName = "Shubha Agrawal";
    console.log("Hello, my name is "+yourName);
*/
// C. Booleans
/*    const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kevin';

    console.log(a < b);
    console.log(c > d);
    console.log('Name' === 'Name');
    // FOR THE NEXT TWO, USE ONLY && OR ||
    console.log(true || false);
    console.log(false || false || false || false || false || true);
    console.log(false === false)
    console.log(e === 'Kevin');
    console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
    console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
    console.log(48 == '48');
*/
// D. The Farm

/*    let animal = "horse";
    if (animal === "cow"){
        console.log("mooooo");
    } 
    else {
        console.log("Hey! You're not a cow.");
    }
*/
// E. Driver's Ed
/*
    let personAge = 38;
    if (personAge >= 16){
        console.log("Here are the keys!");
    }
    else {
        console.log("Sorry, you're too young.");
    }
*/
//_____________________________________________________________



// II. Loops
// A. The Basics

/*    console.log("Print all the numbers from 0 to 10, inclusive");
    for (let i = 0; i<=10 ; i++){
        console.log(i);
    }

    console.log("Print all the numbers from 10 up to and including 400");
    for (let i = 10; i<=400 ; i++){
        console.log(i);
    }

    console.log("Print every third number starting with 12 and going no higher than 4000");
    let i = 12;
    while (i<=4000){
        console.log(i);
        i = i+3;
    }
*/

// B. Get even

/*    console.log("Print out the numbers that are within the range of 1 - 100");
    for (let i = 1; i<=100 ; i++){
        if(i%2 === 0){
            console.log(i+"<-- is an even number");
        } else
        {
            console.log(i);
        }
    }
*/

// C. Give me Five

/*    for (let i = 1; i<=100; i++){

        if (i%5 === 0){
            console.log(`I found a ${i}. High five!`);
        }

        if (i%3 === 0){
            console.log(`I found a ${i}. Three is a crowd`);
        }
    }
*/

// D. Savings account

/*
    let bank_account = 0;
    for (let i = 1; i<=10; i++){
        bank_account = bank_account + i;
    }
    console.log(`I have $${bank_account} in my bank before my bonus`);

    let bank_account1 = 0;
    for (let i = 1; i<=100; i++){
        bank_account1 = bank_account1 + i;
    }
    bank_account1 = bank_account1*2;
    console.log(`I have $${bank_account1} in my bank after my bonus`);
*/

//_____________________________________________________________





// III. Arrays & Control Flow
// A. Talk about it:

/*
    1.What are the things in an array called?
    Answer: Elements
    2.Do Arrays guarantee those things will be in order?
    Answer: We can access array elements by its index, So it does not matter but yeah things will be in order in an Array
    3.What real-life thing could you model with an array?
    Answer: We can think of rows of books arranged in a library. We can access any book without disturbing others.
*/

// B. Easy Does It
/*
    let quote1 = "Whatever you are, be a good one.";
    let quote2 = "Be yourself; everyone else is already taken.";
    let quote3 = "The only real mistake is the one from which we learn nothing.";

    let quote = [];
    quote.push(quote1,quote2,quote3);
    console.log(quote);
*/

// C. Accessing elements

/*
    const randomThings = [1, 10, "Hello", true]
    console.log(randomThings);
    console.log("First element this array is "+randomThings[0]);
    randomThings[2] = "World";
    console.log(randomThings);
*/

// D. Change values

/*    
    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
    console.log(ourClass);
    console.log(ourClass[2]);
    for (i=0;i<ourClass.length;i++){
        if(ourClass[i] === "Github"){
            ourClass[i] = "Octocat";
        }
    }
    ourClass.push("Cloud City");
    console.log(ourClass);
*/

// E. Mix It Up

    const myArray = [5, 10, 500, 20];
    myArray.push("Aegon");
    myArray.push("Shubha");
    console.log(myArray);
    myArray.shift();
    console.log(myArray);
    myArray.unshift("Bob Marley");
    myArray.pop();
    console.log(myArray);
    myArray.reverse();
    console.log(myArray);

    // Did you mutate the array? Answer: Yes myArray mutated.
    //What does mutate mean? Answer: Mutate means changing array itself.
    //Did the .reverse()method return anything? Answer: It is changing itself and returns itself.

// F. Biggie Smalls

/*
    let number = 105;
    if (number < 100){
        console.log("Little number");
    } 
    else {
        console.log("Big number");
    }
*/

// G. Monkey in the Middle

/*
    let num = 5;
    if (num < 5){
        console.log("Little number");
    } 
    else if (num >10){
            console.log("Big number");
            }
        else {
            console.log("Monkey");
        }
*/

// H. What's in Your Closet?

/*
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


    console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
    kristynsCloset.splice(6,0,"raybans");
    console.log(kristynsCloset);
    kristynsCloset[5] = "stained knit hat";
    console.log(kristynsCloset);

    console.log(thomsCloset[0][0]);
    console.log(thomsCloset[1][1]);
    console.log(thomsCloset[2][1]);

    console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`)

    thomsCloset[1][2] = "Footie Pajamas";
    console.log(thomsCloset);
*/

//_____________________________________________________________





// IV. Functions
// A.

    function printGreeting(name){
        return ("Hello there "+name+"!");
    }

    console.log(printGreeting("Slimer"));

// B.

    function printCool(name){
        return (name+" is cool");
    }

    console.log(printCool("Captain Reynolds"));

// C.

    function calculateCube(number){
        return number**3;
    }
    console.log(calculateCube(5));

// D.
    function isVowel(char){
        char = char.toLowerCase();
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            return true;
        }
        else
            return false;

    }
    console.log(isVowel("U"));

// E.
    const getTwoLengths = function(str1,str2){
        let lenArray = [str1.length,str2.length];
        return lenArray;
    
    }
    console.log(getTwoLengths("Hank", "Hippopopalous"));

// F.
    function getMultipleLengths(strArray){
        console.log(strArray.length);
        let lengthArray = [];
        for(let i=0;i<strArray.length;i++){
            tempArray = strArray[i].length; 
            lengthArray[i] = tempArray;
        }
        return lengthArray;
    
    }

    console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G.
    function maxOfThree(num1,num2,num3){
        
        if(num1>=num2 && num1>=num3)
            return num1;
        else if (num2>=num1 && num2>=num3){
            return num2;
        }
        else
            return num3;
    
    }  
    console.log(maxOfThree(6, 9, 1));


// H.
    function printLongestWord(strArray) {
        maxLength = 0;
        for(i=0;i<strArray.length;i++){
            if(strArray[i].length > maxLength){
                maxLength = strArray[i].length;
                maxString = strArray[i];
            }
        }
        return maxString;
    
    }

    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd","BeanutButter"]));

//_____________________________________________________________



// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra


