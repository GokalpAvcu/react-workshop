/*setTimeout(() => {
console.log("Merhaba");
}, 5000); */ // yazdırma süresini belirttik

/*setInterval(() => {
console.log("Merhaba ben her saniye çalışacağım.");
}, 1000); */ // sürekli calisir

/*const sayHi = () => { // sayHi isminde bir fonksiyon tanimladik
    console.log("Merhaba"); // log'a Hİ yazdirdik
}
sayHi(); */ // sayHi fonksiyonunu calistirdik

/*const sayHi = (callback) => {
    callback();
};

sayHi(() => { // burdan bir parametre fonksiyonu yukarıdaki callback'e gönderiyorum 
    console.log("Hello");
}); */

// fetch'in görevi = herhangi bir veri kaynagina baglaniyor, herhangi bir endpoint'e ordan veriyi alıp bize gösteriyor

/*import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users") //api'den bize data(response) döndükten sonra
.then((data) => data.json()) // burdaki data'da api'den ne geliyorsa o getiriliyor data.json kısmından data dönüyor
.then((users)=>{            // o data burdaki users'a düşüyor ve ordan alıp kullanmaya devam ediyoruz
    console.log("Users Yuklendi!", users); 

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((post) =>console.log("Post Yuklendi!",post));

}); */


async function getData(){ //asenkron olarak tanimladim
const users =  await (
 await fetch("https://jsonplaceholder.typicode.com/users") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder
).json();

const post1 =  await (
 await fetch("https://jsonplaceholder.typicode.com/users") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder
).json();

const post1 =  await (
 await fetch("https://jsonplaceholder.typicode.com/users") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder
).json();

console.log("users", users);
console.log("post1", post1);
console.log("post2", post2);
}
getData() // burda async await kullanarak yukarıdaki kod dizimine göre daha temiz bir kod yazdım