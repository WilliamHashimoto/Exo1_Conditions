// //1
// if (1 == "1") {
//     console.log("Vérifié");
// }
// else {
//     console.log("Faux");
// }

// //2
// if (1 === "1") {
//     console.log("Vérifié");
// }
// else {
//     console.log("Faux");
// }

// //3
// let nom = prompt("Quel est ton prénom?");
// if (nom.length < 5) {
//     alert("Ton nom est trop court")
// }
// else {
//     alert(`Salut ${nom}`);
// }

// //4
// let add = prompt("5 + 5 = ?");

// if (add == 10) {
//     alert("Félicitations");
// }
// else {
//     alert("C'est faux");
// }

// //5 
// let mult = prompt("2 * 10 = ?");
// if (mult == 20) {
//     alert("Félicitation. La réponse est bien 20");
// }
// else {
//     alert("C'est dommage, tu n'étais qu'à " + Math.abs(20 - mult) + " unités de la bonne réponse");
// }

// //6
// let tab = [];
// let prompt1 = prompt("Insérer un élément: ");
// tab.push(prompt1);
// let prompt2 = prompt("Insérer un élément: ");
// tab.push(prompt2);
// let prompt3 = prompt("Insérer un élément: ");
// tab.push(prompt3);
// alert(tab);

//7
// let grandNombres = [];
// let petitNombres = [];
// let elem1 = prompt("entrez un chiffre");
// let elem2 = prompt("entrez un chiffre");
// if (elem1 >= 12) {
//     grandNombres.push(elem1);
// }
// else {
//     petitNombres.push(elem1);
// }
// if (elem2 >= 12) {
//     grandNombres.push(elem2);
// }
// else {
//     petitNombres.push(elem2);
// }
// alert(`petitNombres = ${petitNombres} ` + `grandNombres = ${grandNombres}`);

//8
alert("Dans les prompts qui suivent, rentrez d'abord un int, ensuite un string, et enfin un booleen");
let x = prompt("Valeur 1: ");
let y = prompt("Valeur 2: ");
let z = prompt("Valeur 3: ");

x = Number(x);
z = Boolean(z);

let list = [];
list.push(x,y,z);

if (typeof(list[0]) === "number" && typeof(list[1]) === "string" && typeof(list[2]) === "boolean") {
    alert("Quelle bonne mémoire");
}
else {
    alert("Tu fumes trop");
}
