let persons : string[] = ["Clau", "Sole", "Andy"]

persons.push("Sebas")

let numbers : number[] = [1, 2, 3, 4, 5];

numbers.push(10);

// Tuplas array con elementos definidos
let movies : [string, boolean, number] = ["Harry Potter", true, 1998]

// Enum

enum Gender {
    Male,
    Female
}

console.log(Gender.Female)

// Castear

let responseExtra:any = "10 as unknown as number, sip";
let frase:string = <string>responseExtra
console.log(frase)

