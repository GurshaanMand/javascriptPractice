//Author: Gurshaan Mand

const prompt = require("prompt-sync")();

let quit = false;

do{
    console.log("Which operartion do you want to perform, type that number. \n\t(1) Additon \n\t(2) Subtraction \n\t(3) Multiplication \n\t(4) Division \n\t(5) quit\n");
    let input = prompt("")
 
    let isValid = inputValidator(input);

    if(isValid){
        if(input == "5"){
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
    }
    else{
        console.log("Invalid input, try again.")
    }
    
    
}while(!quit);

function inputValidator(input){
    let isValid = false;

    if(input.length == 1 || !isNaN(input)){
        return (isValid = true);
    }
}

function numValidator(num){
    let isValid = false;

    if(input.length > 0 || !isNaN(input)){
        return (isValid = true);
    }
}

function add(){
    console.log("To get the result of ur addition type '='")
    
    let arr = getInput();
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }

    console.log("The result of the addtion is: " + sum + "\n");
}

function subtract(){
    console.log("To get the result of ur subtraction type '='")

    let arr = getInput();
    let result = parseInt(arr[0]);

    for(let i = 1; i < arr.length; i++){
        result = result - parseInt(arr[i]);

    }

    console.log("The result of the addtion is: " + result + "\n");
}

function multi(){
    console.log("To get the result of ur multiplication type '='")

    let arr = getInput();
    let product = 1;

    for(let i = 0; i < arr.length; i++){
        product *= parseInt(arr[i]);
    }

    console.log("The result of the addtion is: " + product + "\n");
}

function divide(){
    console.log("To get the result of ur division type '='")

    let arr = getInput();

    let division = Math.pow(parseInt(arr[0]), 2);

    for(i = 0; i < arr.length; i++){
        division = division / parseInt(arr[i]) ;
    }

    console.log("The result of the addtion is: " + division + "\n");
}

function getInput(){
    let i = 0;
    let arr = [];
    let num = 0;

    do{
        num = prompt("Enter the number:") //get the number as a string

        let isValid = numValidator(num);

        if(isValid){
            if(num !== "="){
                arr[i++] = num; //adding to an array
            }
        }
        else{
            console.log("Please enter a valid number")
        }
        
    }
    while((num !== "="));

    return arr;
}