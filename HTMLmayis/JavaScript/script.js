// alert("wake up omer");
console.log("welcome")
console.error("it was something  wrong!")
console.warn("Now... we are free")

//variables
var password;
password="asset"
age=25;
console.log(age)
console.log(password)

const email = "asset@hilti.com"  //sabit (const)
console.log(email)


let firstName ="enesus";
console.log(typeof firstName) // değişkenin tipi ekrana yansır

let ageHim=33;
console.log(typeof ageHim)

let using_Credit =false;
console.log(typeof using_Credit)

let phone;
console.log(typeof phone)

//Array

let list =["Adem","Musa","ibrahim"]
console.log(typeof list)
console.log(list)

let address ={
    city: "istanbul",
    country: "Türkiye"
}
console.log(typeof address)
console.log(address)

var count =function(){
    return 0;
}
console.log(typeof count)

//Operators

//A-Aritmetic

let data;
const a=20;
const b=10;
const  c=5;
let   d=4

data=a+b;
data=a-b;
data=++d;
data=a%b;
console.log(data) //son işlemi ekrana yansıtır
console.log(d) 

//B-Atama

data =a;
data +=a;
console.log(data)

//C-Karşılaştırma

data=a==b; //a & b eşitmi
data=b==c;
data=5==="5" //3 adet eşit varsa hem değere hem türe bakar. 2 adet eşit sadece değere bakar
data=a!==b;
data=a<b;
data=5>=5;
data=b>=c;

//Logic Operatorler

data= (a>b) && (a>c)
data= (b>a) ||(a>c)
data= !(a<b)

console.log(data)

//Date Object Get & Set


let zaman = new Date();
let birthday =new Date(1991,6,19);

zaman.setDate(25);
zaman.setMonth(3)


console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours())

console.log(zaman.getFullYear()-birthday.getFullYear());
console.log(zaman.getMonth()-birthday.getMonth());

console.log(zaman)
console.log(typeof zaman)


//numbers

let veri;

// veri= Number("5");
// veri= parseInt("5");
// veri=parseFloat("5.5");
// veri =parseInt("5c");
// veri=parseInt("c5");
// veri=isNaN("c5");
// veri=isNaN("5");

var sayi =15.435476443;
veri= sayi.toPrecision(3);
veri=sayi.toFixed(6); //virgülden sonra kaç basamak

veri = Math.PI;
veri= Math.round(3.2);
veri=Math.ceil(3.1) //hep yukarı yuvarlar
veri= Math.floor(3.8)
veri= Math.pow(3,3);
veri=Math.sqrt(49);
veri=Math.abs(-32);
veri=Math.max(2,11,5,67,42);
veri=Math.random()*10;  // 0 ile 10 arasında üretir
veri=Math.floor(Math.random()*100+1); //1-100 arası ondalıksız


console.log(veri);

//Strings

const firstname ="Enesus";
const lastname="Falcon";
const hage= 14;
let hobbies= "plants chess movie basket"

let es;

es =firstName+" "+lastname;
es= 'My nickName'+" "+firstName+" "+'lastname'+" "+lastname+" "+'yaşım'+" "+hage+" "+'Bursa\'da yaşıyorum'

es= firstName.concat(' ',lastname)

es=es.toUpperCase()
es=es.toLowerCase()

//es=es.substring(3,7) //4 üncü harften başlar (index 0-1-2..)
//es=es.slice(3,9)

//es=es.indexOf("u")

es=es.replace('sus','yol');

es=es.length;

es=hobbies.split(' ');




console.log(es);
console.log(typeof es);

//Arrays





