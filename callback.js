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
fetch("https://jsonplaceholder.typicode.com/users") // api'den bize data(response) döndükten sonra
.then((data) => data.json())                       // burdaki data'da api'den ne geliyorsa o getiriliyor data.json kısmından data dönüyor
.then((users)=>{                                  // o data burdaki users'a düşüyor ve ordan alıp kullanmaya devam ediyoruz
    console.log("Users Yuklendi!", users); 

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((post) =>console.log("Post 1 Yuklendi!",post));

    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((data) => data.json())
    .then((post) =>console.log("Post 2 Yuklendi!",post));

}); */

// yukarıdaki yazdigim kodu biraz daha düzenleyip async fonksiyonunun icinde await ile asenkron işlemlerimi iç içe yazmadan(yukarıdaki gibi) sıraya koydum
/* async function getData () {  
    const users = await {
        await fetch("https://jsonplaceholder.typicode.com/users")
    }.json();

    const post1 = await {
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    }.json();

    const post2 = await {
        await fetch("https://jsonplaceholder.typicode.com/post2")
    }.json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
} 

getData() */

//getData();

// burda yukarıda yazdigimiz kodu anonim fonksiyon olarak yazdik axios kullandık, axios'un node fetch'e göre artısı vardır(örnegin yukarida iki kere await yazfık json kullandik)

/*(async () => {    // asenkron olarak tanimladim

const { data: users } = await axios("https://jsonplaceholder.typicode.com/users") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder

const { data: post 1 } = await axios("https://jsonplaceholder.typicode.com/posts/1") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder

const { data: post2 } =  await axios("https://jsonplaceholder.typicode.com/posts/2") // await yazıp kodu burda beklettim, eğer await yazmazsam kodu beklemez bir sonraki satıra devam eder

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


/*const getComments = (number) => { 
    return new Promise((resolve, reject) => { 
    if (number === 1){     // number eger denkse 1'e resolve et değilse reject et
        resolve({ text: "Selam" });
    }  
    reject("Oops bir problem oluştu!");
    });  

};

getComments(1)
.then((data) => console.log(data)) 
.catch((e) => console.log(e)); */

//--------- burada yukarıdaki kod bloğunu axios ile olusturduk------------------------------------------

const getUsers = () => { // burdaki getUsers asagidaki endpoit'te ki("https://jsonplaceholder.typicode.com/users") veriyi alıp asagida resolve ediyor
return new Promise(async (resolve, reject) => { 
     const { data } = await axios ("https://jsonplaceholder.typicode.com/users"); // await mutlaka async bir fonksiyonun icinde olmalı

    resolve(data);
    // reject("Bir sorun  oluştu");
    });  
};


const getPost = (post_id) => {
return new Promise(async(resolve, reject) => {
    const { data } = await axios ("https://jsonplaceholder.typicode.com/posts/" + post_id);

    resolve(data);
    //reject("Bir sorun daha oluştu");
    });
};


/*getUsers()
.then((data) => console.log(data))  // burdaki islemlerimiz sırali gitmez cunku promise kullandık asenkron fonksiyonlar
.catch((e) => console.log(e));   

getPost(1)
.then((data) => console.log(data)) 
.catch((e) => console.log(e)); */

// Burda ise yukarıdaki kodu async ve await ekleyerek senkron halde cagirdik

((async)  => {
try {
const users = await getUsers();
const post = await getPost(1);

console.log(users);
console.log(post);
} catch (e) {
    console.log(e);
}
})();

// eger birden fazla promise var ise elimizde onlarin her birini yukarıdaki gibi tek tek calistirmaktansa asagida array olarak verip her birini calistirilmasini ve her birinden dönen sonucu log'lamasını istedim onu da
// promiseAll ifadesi ile gerceklestirdim

Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(consle.log);
