function getText(){
return document.getElementById("textInput").value;
}

function checkVowels(){
let text = getText();
let vowels = "aeiouAEIOU";
let count = 0;

for(let i = 0; i < text.length; i++){
    if(vowels.includes(text[i])){
        count++;
    }
}

document.getElementById("output").innerText = "Vowels: " + count;
}

function checkConsonants(){
let text = getText();
let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
let count = 0;

for(let i = 0; i < text.length; i++){
    if(consonants.includes(text[i])){
        count++;
    }
}

document.getElementById("output").innerText = "Consonants: " + count;
}

function countSpaces(){
let text = getText();
let count = 0;

for(let i = 0; i < text.length; i++){
    if(text[i] === " "){
        count++;
    }
}

document.getElementById("output").innerText = "Spaces: " + count;
}


function countNewLines(){
let text = getText();
let count = 0;

for(let i = 0; i < text.length; i++){
    if(text[i] === "\n"){
        count++;
    }
}

document.getElementById("output").innerText = "New Lines: " + count;
}

function toLower(){
let text = getText();
document.getElementById("output").innerText=text.toLowerCase();
}

function capitalize(){
let text = getText();
document.getElementById("output").innerText=
text.charAt(0).toUpperCase()+text.slice(1);
}

function titleCase(){
let text = getText().toLowerCase();
let words = text.split(" ");

for(let i = 0; i < words.length; i++){
    let first = words[i][0].toUpperCase();
    let rest = words[i].slice(1);
    words[i] = first + rest;
}

let result = words.join(" ");
document.getElementById("output").innerText = result;
}

function checkPalindrome(){
let text = getText().replace(/\s/g,"").toLowerCase();
let rev = text.split("").reverse().join("");
document.getElementById("output").innerText =
(text===rev)?"Palindrome":"Not Palindrome";
}

function firstWord(){
let text = getText().trim().split(" ");
document.getElementById("output").innerText=text[0];
}

function replaceSpaces(){
let text = getText();
document.getElementById("output").innerText=text.replace(/ /g,"-");
}

function reverseText(){
let text = getText();
document.getElementById("output").innerText=
text.split("").reverse().join("");
}

function sortWords(){
let text = getText().split(" ");
document.getElementById("output").innerText=text.sort().join(" ");
}