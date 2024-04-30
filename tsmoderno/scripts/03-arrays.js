"use strict";
let persons = ["Clau", "Sole", "Andy"];
persons.push("Sebas");
let numbers = [1, 2, 3, 4, 5];
numbers.push(10);
// Tuplas array con elementos definidos
let movies = ["Harry Potter", true, 1998];
// Enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female);
// Castear
let responseExtra = "10 as unknown as number, sip";
let frase = responseExtra;
console.log(frase);
