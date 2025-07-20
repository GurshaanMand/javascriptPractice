const prompt = require("prompt-sync")();

let quit = false;

do{
    console.log("Which operartion do you want to perform: \n\t(1) Abdditon \n\t(2) Subtraction \n\t(3) Multiplication \n\t(4) Division \n\t quit");
    let input = prompt("").toLowerCase();

    if(input == "quit"){
        quit = true;
        console.log("Exiting the program...");
    }
    else if(input == "1"){
        add();
    }
    else if(input == "2"){
        subtract();
    }
    else if(input == "3"){
        multi();
    }
    else if(input == "4"){
        divide();
    }
    
}while(!quit);

function add(){
    let i = 0;
    let arr = [];
    let num = 0;
    console.log("To get the result of ur addition type '='")

    do{
        num = prompt("Enter the number:") //get the number as a string

        if(num !== "="){
            arr[i++] = num; //adding to an array
        }
    }
    while((num !== "="));

    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }

    console.log("The result of the addtion is: " + sum + "\n");
}

function subtract(){
    let i = 0;
    let arr = [];
    let num = 0;
    console.log("To get the result of ur subtraction type '='")

    do{
        num = prompt("Enter the number:") //get the number as a string

        if(num !== "="){
            arr[i++] = num; //adding to an array
        }
    }
    while((num !== "="));

    let result = parseInt(arr[0]);

    for(let i = 1; i < arr.length; i++){
        result = result - parseInt(arr[i]);

    }

    console.log("The result of the addtion is: " + result + "\n");
}

function multi(){
    let i = 0;
    let arr = [];
    let num = 0;
    console.log("To get the result of ur multiplication type '='")

    do{
        num = prompt("Enter the number:") //get the number as a string

        if(num !== "="){
            arr[i++] = num; //adding to an array
        }
    }
    while((num !== "="));

    let product = 1;

    for(let i = 0; i < arr.length; i++){
        product *= parseInt(arr[i]);
    }

    console.log("The result of the addtion is: " + product + "\n");
}

function divide(){
    let i = 0;
    let arr = [];
    let num = 0;
    console.log("To get the result of ur division type '='")

    do{
        num = prompt("Enter the number:") //get the number as a string

        if(num !== "="){
            arr[i++] = num; //adding to an array
        }
    }
    while((num !== "="));

    let division = Math.pow(parseInt(arr[0]), 2);

    for(let i = 0; i < arr.length; i++){
        division = division / parseInt(arr[i]) ;
    }

    console.log("The result of the addtion is: " + division + "\n");
}