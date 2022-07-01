// //Scrieți un program  pentru a verifica dacă un număr este par  sau impar.
// const parImpar = (a) => {
//     if(a%2===0){
//         console.log(a + " este par")
//     }
//     else {
//         console.log(a +" este impar")
//     }
//
// }
// parImpar(5)
// //Scrieți un program  pentru a citi valoarea unui număr întreg m și afișați valoarea lui este 1 daca m este mai mare ca  0, 0 când m este 0 și -1 când m este mai mic ca 0.
//
// //Scrieți un program  pentru a clasifica înălțimea unei persoane în centimetri și clasificați persoana în funcție de înălțimea ei.
// const inaltimea = (a) => {
//     for (let i = 140; i <= 150; i++) {
//         if(a===i){
//             console.log("Sunteti o peroana de inaltime mica")
//         }
//     }
//     for (let i = 151; i <175 ; i++) {
//         if(a===i){
//             console.log("Sunteti o peroana de inaltime medie")
//         }
//     }
//     for (let i = 176; i <260 ; i++) {
//         if(a===i){
//             console.log("Sunteti o peroana de inaltime inalta")
//         }
//     }
// }
// inaltimea(202)
// //Scrieți un program  pentru a verifica dacă  litera este o vocală sau o consoană.
// const vocalaConsoana = (a) => {
//     if(a==="b" && "c"&& "d"&&"f"&& "h"&& "j"&& "k"&& "l"&& "m"&& "n"&& "p"&& "q"&& "r"&&"s"&& " t"&& "v"&& "w"&& "x"&& "z"&&"y"){
//         console.log("Ati dat o consoana")
//     }
//     else{
//         console.log("Ati dat o vocala")
//     }
// }
// vocalaConsoana("a")
// //Scrieți un program in care utilizatorul noteaza un character prin prompt si in consola ii returneaza daca
// // este o literă (între a și z sau A și Z) in consola sa apara ca ii character din alfabet altfel sa apara  un mesaj de eroare.
// const esteLitera = () => {
//   const letter =prompt("dati litera")
//     for (let i = 65; i <=90 ; i++) {
//    if(letter.charCodeAt(0)===i){
//        console.log("ati introdus De la A La Z ")
//    }
//     }
//     for (let i = 97; i <=122 ; i++) {
//         if(letter.charCodeAt(0)===i){
//             console.log("ati introdus De la a La z ")
//         }
//     }
//     for (let i = 65; i <123 ; i++) {
//         if(letter.charCodeAt(0)!==i){
//             console.log("Error")
//         }
//     }
//
// }
// esteLitera("a")
// //Scrieți un program care acceptă trei numere și scoate in consola „Toate numerele sunt egale” dacă toate cele trei numere sunt egale, „Toate numerele sunt diferite” dacă toate cele trei numere sunt diferite și „doar unu sau doua egale sau diferite”
// const check = (a,b,c) => {
//     if(a===b && b===c && a===c ){
//         console.log("Numerele sunt egale")
//     }
//     else if (a===b&&b!==c){
//         console.log("Doar 2 sunte egale")
//     }
//     else if(a===c&&c!==b){
//       console.log("Doar 2 sunte egale")
//   }
//     else if(b===c&&a!==b){
//         console.log("Doar 2 sunte egale")
//     }
//     else{
//         console.log("toate numerele sunt diferite")
//     }
// }
// check(113,112,113)
// //Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// // Enter your age: 30 You are old enough to drive. Enter your age:15 You are left with 3 years to drive.
// const oldEnoth = () => {
//    const age =+  prompt("enter your age")
//     if(age>=18 ){
//         alert("you are old enough")
//     }
//     else{
//         console.log("You are to small ")
//     }
// }
// oldEnoth()
// //Compare the values of myAge and yourAge using if … else.
// // Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. Enter your age: 30 You are 5 years older than me. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using if else
// // let a = 4 let b = 3 4 is greater than 3
// const whoIsOlder = () => {
//     const firstPerson=+ prompt("Enter your age")
//     const SecondPerson=+ prompt("Enter your age")
//  if(firstPerson > SecondPerson){
//      console.log("First person is bigger")
//  }
//  else if(SecondPerson > firstPerson){
//      console.log("Second person is bigger")
//  }
//  else {
//      console.log("you are the same age")
//  }
// }
// whoIsOlder()
// //Write a program which tells the number of days in a month.
// // Enter a month: January
// // January has 31 days.
// // Enter a month: JANUARY
// //   January has 31 day
// //   Enter a month: February
// // February has 28 days.
// //   Enter a month: FEbruary
// //   February has 28 days.
//
//
// const whatMonthIs = (a) => {
//     if (a=== "January"){
//         console.log("January have 31 days")
//     }
//     else if (a==="December"){
//         console.log("December have 29 days")
//     }
// }
// whatMonthIs("December")
// //Check if a day is weekend day or a working day. Your script will take day as an input.
// //    What is the day  today? Saturday
// //   Saturday is a weekend.
// // What is the day today? saturDaY
// //   Saturday is a weekend.
// //     What is the day today? Friday
// //  Friday is a working day.
// //     What is the day today? FrIDAy
// //   Friday is a working day.
// const isWeekendOrWorking = () => {
//     let a = prompt("Today is ...?")
//     if(a.toLowerCase()==="saturday"){
//         console.log("Saturday Is weekend")
//     }
//     else if (a.toLowerCase()==="friday"){
//         console.log("Friday Is Work day")
//     }
// }
// isWeekendOrWorking()
// //Stabiliți care dintre cele trei numere introduse de utilizator este maximul și afișați-l pe ecran.
// // Utilizatorul introduce alternativ prin numere prompte. Folosind construcția if..else,
// // scrieți codul care ar trebui să determine care dintre numerele introduse este cel mai mare
// const biggest = () => {
//     let a =+prompt("Give 1 number")
//     let b =+prompt("Give 2 number")
//     let c=+prompt("Give 3 number")
//     if(a>b&&a>c){
//         console.log("1 number is biggest")
//     }
//     else if (b>a&&b>c){
//         console.log("2 number is biggest")
//     }
//     else if (c>a&&c>b){
//         console.log("3 number is biggest")
//     }
//     else{
//         console.log("they are equal")
//     }
// }
// biggest()
// //Intrebati utilizatorul numarul de telefon, verificati corectitudinea numarului d
// // aca e correct sa apara mesajul”mersi pentru numar” daca nui correct sa apara eroarea.
// const numberTel = () => {
//     let tel= "079049389"
//     let urtel= prompt("dati numar de telefon")
//     if(tel === urtel){
//         console.log("your number is correct")
//     }
//     else{
//         console.log("you did a mistake")
//     }
// }
// numberTel()
// //Utilizatorul noteaza un oare care text voi trebuie sa testati daca utilizatorul posteaza
// // cuvintele: oaie, prost, animala, idiont sai apara o eroare ca acestea sunt prostii.
// const banList = () => {
//     let a = prompt("type word")
//   if(a==="prost"||"oaie"||"idiot"||"animala"){
//       alert("you wrote an bad word clean your mouth")
//   }
//   else{
//       alert("its okey")
//   }
// }
// banList()
//creați o variabilă "lang", daca valoarea va fi Ro in consola sa apară textul " bine ați venit în limba română", daca valoarea va fi En in consola va apărea textul' welcome from English lang',
// dacà valoarea va fi Ru in consola va apărea textul ' привет на русском' , altfel va fi textul ' nu există așa limba
// const lang = () => {
//     let a =prompt("dati text")
//     if(a==="Ro"){
//         console.log("Buna ziua")
//     } else if ( a === "En"){
//         console.log("Hello!")
//     } else if( a === "Ru"){
//         console.log("Привет")
//     } else {
//         console.log(`Nuexista asa limb0`)
//     }
// }
// lang()

// creați variabila minute conține un număr de la 0 la 59.
// Determinați în ce sfert de oră se încadrează acest număr
// (primul, al doilea, al treilea sau al patrulea).

// const time = () => {
//     let timex = +prompt('Introduceti nr de la 0 la 59')
//     if (timex === 0  || timex <= 15 ){
//         console.log(`Timpul primul sfert`)
//     }else if(timex === 16 || timex <= 29){
//         console.log('Va aflati in al 2 sfert')
//     }else if(timex === 30 || timex <= 44){
//         console.log(`Va aflati 3`)
//     }else if(timex === 45 || timex <= 59){
//         console.log(`4`)
//     }else {
//         console.log(`nu exista asa ceva`)
//     }
// }
//
// time()

//creați o variabilă număr, daca este mai mare că 3
// și mai mica 15 sa apară în consolă ' afirmație corectă',
// daca numărul este egal după valuare și după tip cu 6 sa
// apară în consolă' adevărat după tip și valuare' astfel sa apară eroare

// const num = () => {
//     let number = +prompt(`Introduceti numar`)
//     if (number === 6) {
//         console.log(true +  'adevarat dupa tip si valoare')
//     } else if (number >= 3 && number <= 15) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
//
// num()

// // Creați variabila test de tip boolean, scoateți in
// // consola adevărat sau fals, folosiți ternary operator
// /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
// const func = (test) => {
//    test = true || false ? Boolean :false;
//     //intrebarea ? adevarat || fals
//
// }
//
// func(true)

// const func = (a,b) => {
// a = +prompt(`Nr 1`)
//     b = +prompt(`Nr 2`)
//     if(a>b){
//         console.log(a + ` <- mai mare`)
//     } else if(b>a){
//         console.log(b + ` <- mai mare`)
//     } else {
//         console.log(a + ` <- nr sunt egale`)
//     }
//
// }
// func()

//Este dat un număr .
// Dacă este par, atunci inmultiti-l cu 2, altfel inmultiti-l cu  3.

// const fun = (num) => {
//     if(num % 2 === 0 ){
//         console.log(num * 2)
//     } else {
//         console.log(num * 3);
//     }
// }
//
// fun(144)
//
// const func = (txt) => {
//     if(txt === 'abc'){
//         console.log(`www`)
//     }else if(txt === 'www'){
//         console.log(`zzz`)
//     }
// }
//
// func(`www`)
const multiply = (a) => {
    for (let i = 1; i < 101; i++) {
        result=a*i
        console.log(`${a} * ${i} =${result}`)
    }
}
multiply(23)
