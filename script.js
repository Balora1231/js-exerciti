/*
//Obțineți primul și ultimul caractere din string.
const firstAndLast = (str) => {
    console.log(str[0]);
    console.log(str.charAt(str.length - 1));
}
//firstAndLast("some test string")
//Faceți primul și ultimul character  în majuscule.
const firstAndLastBig = (str) => {
    console.log(str[0].toUpperCase());
    console.log(str.charAt(str.length - 1).toUpperCase());
}
//firstAndLastBig("some test string")
//Căutați poziția cuvântului „string” în string.
const findString = (str) => {
    console.log(str.search("some test string"));
}
//findString("some test string")
//Găsiți poziția celui de-al doilea spațiu.
const findSpace = (str) => {
    let a = str.split(' ')
    console.log(a)
}
findSpace("some test string")
*/
//Obțineți un șir de la al cincilea caracter cu o lungime de 4 caractere
/*
const getCharacter = (str) => {
  return   str.slice(5,9)
}
console.log(getCharacter("some test string"));
*/
//Obțineți o nouă linie din original ștergând ultimele 6 caractere
// (adică șirul inițial fără ultimele 6 caractere)
/*
const newLine = (str) => {
    return str.substr(5)
}
console.log(newLine("some test string"));
*/
//Din cele două variabile a = 20 și b = 16,
// obțineți șirul variabilei, în care conține textul „2016”

/*const prikol = () => {
    let a=20
    let b=16
    let str = ""
    return  str.concat(a,b)
}
console.log(prikol());*/


/////////// CEZAR ////////////
//Implementați legendarul cifru Cezar:
//
// În criptografie, un cifru Caesar, cunoscut și
// sub numele de cifru Caesar, cifrul shift,
// codul Caesar sau Caesar shift, este una dintre
// cele mai simple și mai cunoscute tehnici de
// criptare. Este un tip de cifră de substituție
// în care fiecare literă din textul clar
// este înlocuită cu o literă cu un anumit număr
// fix de poziții din alfabet. De exemplu, cu o
// deplasare la stânga de 3, D ar fi înlocuit cu A,
// E ar deveni B și așa mai departe. Metoda
// poartă numele lui Iulius Caesar, care a
// folosit-o în corespondența sa privată.
//
// Sugestie: poate fi necesar să convertiți
// literele în valorile lor unicode.
// Asigurați-vă că citiți documentația!
//
// scrieți o funcție care necesită codul unui
// șir și un factor de schimbare și apoi
// returnează șirul codat:
//
// caesar („A”, 1) // pur și simplu schimbă
// litera cu 1: returnează „B”
// cifrul ar trebui să păstreze majuscule:
//
// caesar („Hey”, 5) // returnează „Mjd;
// nu trebuie să schimbe punctuația:
//
// caesar ("'Hello, World!", 5)
// returnează "Mjqqt, Btwqi!"
// schimbarea ar trebui să înfășoare alfabetul:
//
// caesar („Z”, 1) // returnează „A”

// numerele negative ar trebui să funcționeze și:
//
// caesar („Mjqqt, Btwqi!”, -5)
// returnează „Hello, World!”


/*
const caesarCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
        .map((l, i) => {
            const c = str.charCodeAt(i);
            if (c >= 65 && c <= 90)
                return String.fromCharCode(((c - 65 + n) % 26) + 65);
            if (c >= 97 && c <= 122)
                return String.fromCharCode(((c - 97 + n) % 26) + 97);
            return l;
        })
        .join('');
};

console.log(caesarCipher('Mjqqt, Btwqi', -5,false));
console.log(caesarCipher('Z', -1,true));
*/

//Pe baza array-ului [1,2,3,5,8,9,10] formează un nou array, fiecare element care va stoca informații despre numărul și daca este par sau nu:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
/*
let arr1= [1,2,3,5,8,9,10];
let arr2 = []
const isOdd = (arr) => {
  return  arr.forEach(e=>{
      console.log(e)
      arr2.digit=e
       e%2===0? arr2.odd=true:arr2.odd=false
      console.log(arr2)
   })

}
console.log(isOdd(arr1));
*/

//Verificați dacă array-ului [12, 4, 50, 1, 0, 18, 40] conține elemente egale cu zero. Dacă da, returnati true.

/*let arr = [12, 4, 50, 0,1, 18, 40];
const containsZero = () => {
  arr.filter(e=>
  e === 0 ? console.log(true):-1
  )

}
containsZero();*/
//Verificați dacă array-ului ['yes', 'hello', 'no', 'easycode', 'what']
// conține cel puțin un cuvânt mai lung de 3 litere. Dacă da, returnati true.


/*
let arr= ['yes', 'hello', 'no', 'easyCode', 'what']
const moreOrNot = () => {
    arr.forEach(e=>{
        e.length>=3?console.log(true):-1
    })
}
moreOrNot()
*/
//Este oferit un array-ul de obiecte, în care fiecare obiect conține informații
// despre literă și locul poziției sale în linie {literă: ‘a’, locul_pozitiei: 1}:
/*
let arr =[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
const hi = (...tap) => {
    let text =[]
    arr.forEach(item=>{
        tap.forEach(e=>e===item.index?text.push(item.char):-1)
    })
    console.log(text.join(""))
    console.log(tap);
}
hi(7,4,0,)*/
//Sortează array-ul astfel încât cele mai mici elemente
// să fie localizate mai întâi (dimensiunea array-ului este determinată de lungimea acestuia):
// [[14, 45], [1], ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
/*
let arr = [[14,45],[1],["a","c","d"]]
const sortArr = (arr) => {
    return arr.sort()
}
console.log(sortArr(arr));*/
//Este array-ul:
// [
// {cpu: 'intel', info: {cores:2, сache: 3}},
// {cpu: 'intel', info: {cores:4, сache: 4}},
// {cpu: 'amd', info: {cores:1, сache: 1}},
// {cpu: 'intel', info: {cores:3, сache: 2}},
// {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// Sortează-le in ordine crescatoare dupa  nuclee (cores)
/*
let arr = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'intel', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 4, cache: 2}},
    {cpu: 'intel', info: {cores: 5, cache: 2}
    }
]
const descCore = (arr) => {
  let byCore = arr.slice(0)
    byCore.sort((a,b) =>{
        return a.info.cores - b.info.cores;
    });
    console.log(byCore);
}
descCore(arr);*/
//Creați o funcție care va lua o serie de produse și două prețuri. Funcția ar trebui să returneze toate produsele al căror preț este în
// diapazonul specificat și să sorteze de la ieftin la scump:
// let products = [
// {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
// {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
// {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
// {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];
//
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]


//Creați un array care va conține 10 țări  și  unul cu  capitalele acestora. Scrieți funcții care efectuează  următoarele:
// Afișează țările și capitalele pe linii.
// Caută prima apariție a unei țări transmise ca  parametru
// Caută ultima apariție a unei capitale  transmise ca parametru
// Sortează țările
// Inversează ordinea capitalelor
// Afișează țările peste una
// Concatenează array-ul cu capitale la țări, și cel cu  țări la capitale.
/*
let country =["Moldova",  "Germany",   "Italy",   "Pakistan","USA","Albania","Romania","Turkey","Russia","Ukraine"]
let city = ["Chisinau","Rome","Berlin","Islamabad","Washington DC","Tirana","Bucuresti","Ankra","Moscow","Kiev"]
const countryCit = (cout,city) => {
       cout.forEach(e=>{
          console.log(e)
      })
    city.forEach(it=>{
        console.log(it)
    })


}
countryCit(country,city)*/
//Creati o functie byDesc(arr), care va avea un array si va intoarce sortarea array-ului descrescator.
// Exemplu: byDesc([3,10,2,7]) va returna [10,7,3,2].
/*let arr = [3,10,2,7]
const byDesc = (arr) => {
    return arr.sort((a,b)=>b-a)
}
console.log(byDesc(arr));*/
//Creati o functie oddity(arr), care va avea un array de cifre si va intoarce sortarea array-ului descrescator
// . Exemplu: byDesc([3,10,2,7]) va returna [3,7,2,10].
/*
let arr = [3,10,2,7]
const byDesc = (arr) => {
    return arr.sort((a,b)=>a-b)
}
console.log(byDesc(arr));*/
//Creati metoda autoReplace(needles, change, haystack),
// care va primi un array de string, care va trebui de schimbat pe campul change inauntru campului haystack. Exemplu:
//  	AutoReplace([‘salata’, ‘rosii’], ‘mancare’,  ‘rosii proapete sunt in salata’); trebuie sa intoarca
//  	“mancare proaspete sunt in mancare”. Daca doriti sa folositi regex puteti folosi dar nui principial. Daca nu exista parametrii in propozitie va returna false.
//
//
//Sunt date doua array-uri: ['a', 'b', 'c'] și [1, 2, 3]. Combinați-le împreună.
/*let arr1 = ['a', 'b', 'c']
let arr2 = [1, 2, 3]
const foldUp = (arr1,arr2) => {
    return arr1.concat(arr2)
}
console.log(foldUp(arr1, arr2));*/


//Fiind dat array-ul ['a', 'b', 'c']. Adăugați elementele 1, 2, 3 la final.
/*let arr= ['a','b','c']
const addElem = (...elem) => {
return     arr.concat(elem)
}
console.log(addElem(1, 2, 3, 4));*/
//Este dat array-ul  [1, 2, 3]. Creează  din ea [3, 2, 1].
/*let arr= [1,2,3]
const desc = (arr) => {
    return arr.sort((a,b)=>b-a)
}
console.log(desc(arr));*/
//Este dat array-ul   [1, 2, 3]. Adăugați elementele 4, 5, 6 la final.
/*let arr= [1,2,3]

const addElem = () => {
return     arr.push(4,5,6)

}
console.log(addElem());
console.log(arr)*/
//⦁	Este dat array-ul   [1, 2, 3]. Adăugați elementele 4, 5, 6 la început
/*let arr = [1, 2, 3]
const addElem = () => {
    return arr.unshift(4, 5, 6)
}
console.log(addElem());
console.log(arr)*/
//⦁	Este dat array-ul   ['js', 'css', html]. Sterge primul element.
/*let arr =["js","css","html"]
const deleteElem = (arr) => {
    return arr.shift()
}
console.log(deleteElem(arr));
console.log(arr)*/
//⦁	Este dat array-ul   ['js', 'css', html]. Sterge ultimul element.
/*
let arr =["js","css","html"]
const deleteElem = (arr) => {
    return arr.pop()
}
console.log(deleteElem(arr));
console.log(arr)
*/
//⦁	Este dat array-ul   [1, 2, 3, 4, 5]. Folosind metoda slice, scrieți [1, 2, 3].

/*let arr= [1,2,3,4,5]
const sliceScrieti = (arr) => {
    return arr.slice(0,3)
}
console.log(sliceScrieti(arr));*/
//⦁	Este dat array-ul   [1, 2, 3, 4, 5]. Folosind metoda slice, scrieți [4,5].
/*let arr= [1,2,3,4,5]
const sliceScrieti = (arr) => {
    return arr.slice(3,5)
}
console.log(sliceScrieti(arr));*/
//⦁	Este dat array-ul   [1, 2, 3, 4, 5]. Folosind metoda splice, convertiți array-ul în [1, 4, 5].
/*let arr= [1,2,3,4,5]
const sliceScrieti = (arr) => {
    return arr.splice(1,4,4,5)
}
console.log(sliceScrieti(arr))
console.log(arr)
*/
//⦁	Este dat array-ul   [1, 2, 3, 4, 5]. Folosind metoda splice, Scrieti din nou  array-ul în [2,3,4].
/*let arr = [1, 2, 3, 4, 5]
const spliceScrieti = (arr) => {
    return arr.splice(1,3)
}
console.log(spliceScrieti(arr));*/
//⦁	Este dat array-ul   [1, 2, 3, 4, 5]. Folosind metoda splice, Scrieti din nou  array-ul în [1,2,3,a,b,c,4,5].
/*
let arr = [1, 2, 3, 4, 5]
const spliceScrieti = (arr) => {
    return arr.splice(2, 0, "a", "b","c")
}
console.log(spliceScrieti(arr));
console.log(arr)
*/
//⦁	Este dat array-ul   [1, 2, 3, 4, 5]. Folosind metoda splice, Scrieti din nou  array-ul în [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
//⦁	Este dat array-ul [3, 4, 1, 2, 7]. Sortatil ca sa apara in consola de la mic la mare
/*
let arr = [3, 4, 1, 2, 7]
const cresc = (arr) => {
    return arr.sort((a,b)=>a-b)
}
console.log(cresc(arr));*/
//Completați un array cu 10 de x cu un ciclu.
/*

let arr= []
do {
    arr.push("x")
}
    while (arr.length<10)

console.log(arr)*/
//⦁	Completați un array cu numere de la 1 la 10 folosind ciclu.
/*
let arr = []
for (let i = 1; i < 11; i++) {
    arr.push(i)

}
console.log(arr)*/
//⦁	Completați array-ul cu 10 numere aleatorii (fracții) de la 0 la 1
// folosind ciclu. Fracții rotunde la două zecimale
/*
let arr =[]
do {
    arr.push(Math.random().toFixed(2))
}
while (arr.length<10)
console.log(arr)*/
//⦁	Completați array-ul cu 10 numere aleatorii de la 1 la 10 folosind ciclu
/*let arr=[]
for (let i = 0; i <10; i++) {
    arr.push( Math.floor(Math.random() *10))
}
console.log(arr)*/
//⦁	Este dat array-ul [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// Folosind ciclu, scoateți numai acele elemente mai mari ca zero și mai mici ca 10
/*
let arr =[1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
const mm = (arr) =>{
    arr.forEach((e)=>{
        e>0&&e<10?console.log(e):"bom"
    })
}

mm(arr);*/
//⦁	Creati o functie de confirmare a varstei cu un parametru age, in care daca varsta este mai mare de 18 ani apare o alerta de felicitare
// “Felicitari va-ti inregistrat cu success”, daca e mai mica de 18 sa apara o alrta de eroare “ Ne pare rau dar fara parinti nu va pute-ti inregistra”.
/*const confirmAge = (age) => {
    age >=18?alert("Felicitari va-ti inregistrat cu success"):alert("Ne pare rau dar fara parinti nu va pute-ti inregistra :(")
}
confirmAge(122)*/
//⦁	Creati o functie min(a,b) care va returna valoareaminima din din a si b ex
/*const bigest = (a,b) => {
 return a > b ? `${a} este mai mare ` : b > a ? `${b} este mai mare` : "Sunt egale";
}
console.log(bigest(13, 2));*/
//⦁	Scrieți o funcție pow (x, n) care returnează x la puterea lui n.
// Cu alte cuvinte, multiplica x de la sine n de ori și returnează rezultatul.

const power = (x,n) => {
let result= Math.pow(x,n)
   return `  ${x} * ${n} =${result}`

}
console.log(power(11, 100));