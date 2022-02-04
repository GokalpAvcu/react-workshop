
/*
push
map
find
filter
some
every
includes
*/

//const users = ["Gökalp", "Tayfun", "Uygar"]; //  array olusturdum

const users = [               // burda ise obje olusturdum
{
    name: 'Mehmet',
    age: 10
},
{
    name: 'Mehmet',
    age: 25
},
{
    name: 'Burkay',
    age: 40
},
];

// 1- push

/* users.push("Turhan");
users.push("Fatma");

console.log(users); */

// 2- map = array icinde tek tek döner (en cok kullanacagimiz)

/* users.map((item) => { // calback fonksiyon yazıp map fonksiyonu ile array'i döndük
console.log(item.name);
}); */

// 3- find = array icinde verdigimiz kosullarda arama islemi yapar

/*const result = users.find((item) => item.name === "Mehmet" && item.age > 20); // ismi mehmet olup yasi 20'den büyük olanları getir
console.log(result); */

// 4- filter = filtreleme islemi yapar

/* const filtered = users.filter(
    (item) => item.name === "Mehmet" && item.age < 20
    );
    console.log(filtered); */

// 5- some = array'in icerisindeki elemanlardan biri verdigimiz kosula uyuyorsa true döner uymuyorsa false döner

/*const some = users.some((item) => item.age === 11); // yasi 11'e esit olan
console.log(some);*/

// 6- every = array'in bütün elemanlarının sarta uymasini bekler

/*const every = users.every(item => item.age > 5) */ // hepsinin yasi 5'den büyükse true dönsün

// 7- includes = icinde gecip gecmedigini kontrol eder

const meyveler = ["elma", "armut", "muz"];

const isIncluded = meyveler.includes("muz"); // icinde muz geciyorsa true gelir, gecmiyorsa false gelir

console.log(isIncluded);
