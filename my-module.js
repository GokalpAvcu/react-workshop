//  const hello = name => { // export ile iki fonksiyonu dışa aktarıp beraber yazdık
//    console.log(`hello ${name}`);
// };

//  const topla = (a,b) => a + b; // allta yorum satırındaki fonksiyonu böyle de yazabiliriz
//  const cikar = (a,b) => a - b;



//   export { hello, topla, cikar};

/*function topla(a,b) {
    return a + b;
}

export default topla; */

export default (name) => { 
    console.log(`hello ${name}`);
};

const topla = (a, b) => a + b; 
const cikar = (a, b) => a - b; 

const text = 'Text';
const user = {
    name: "Gökalp", // burdaki virgüller cok önemli unutma!!
    surname: "Avcu",
    age: 23,
    job: "Frontend Developer"
};

const users = [
{
    name: 'Tayfun',
    surname: 'Dagci'
},
{
    name: 'Uygar',
    surname:'Suslu'
},
];

export { topla, cikar, text, user, users };