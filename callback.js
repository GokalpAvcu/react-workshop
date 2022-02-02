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

import fetch from "node-fetch";
import axios from "axios"; // node fetch kütüphanesi yerine kullanabileceğimiz diğer kütüphane axios'dur kullanımı daha kolaydır

/*
fetch("https://jsonplaceholder.typicode.com/users") //api'den bize data(response) döndükten sonra
.then((data) => data.json()) // burdaki data'da api'den ne geliyorsa o getiriliyor data.json kısmından data dönüyor
.then((users)=>{            // o data burdaki users'a düşüyor ve ordan alıp kullanmaya devam ediyoruz
    console.log("Users Yuklendi!", users); 

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((post) =>console.log("Post 1 Yuklendi!",post));

    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((data) => data.json())
    .then((post) =>console.log("Post 2 Yuklendi!",post));

}); */


/*(async () => { //asenkron olarak tanimladim
const users =  await axios("https://jsonplaceholder.typicode.com/users") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder

const post1 =  await fetch("https://jsonplaceholder.typicode.com/users") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder

const post2 =  await fetch("https://jsonplaceholder.typicode.com/users") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder

console.log("users", users);
console.log("post1", post1);
console.log("post2", post2);
})(); */

/*const getComments = () => { // getComments adında bir fonksiyon tanımladım
    return new Promise((resolve, reject) => { // bir promise return etmemiz gerekiyor. resolve = bu işlem başarıyla gerçekleşti data'yı verir. reject = bu kod çalışırken bir problem oluştu ve bunu reddettim
    console.log("comments");

    resolve();
    });  

};

getComments()
.then(() => console.log("bitti")) // bir promise resolve oldugunda then bloguna düşer
.catch((e) => console.log(e)); */ // reject oldugunda catch bloguna düşer ve hata yakalanır


const getComments = (number) => { 
    return new Promise((resolve, reject) => { 
    if (number === 1){     // number eger denkse 1'e resolve et değilse reject et
        resolve({ text: "Selam" });
    }
   
    reject("Oops bir problem oluştu!");
    });  

};

getComments(1)
.then((data) => console.log(data)) 
.catch((e) => console.log(e));
