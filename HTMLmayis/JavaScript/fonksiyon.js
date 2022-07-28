// Fonksiyon (function)

function hello() {
    console.log("hello, how are you")
}
hello();

function person(name,age){
    console.log(`isim: ${name} yaş:${age}`)
}
person("hasan",45)
person("ahmet",42)
person("ömer",40)
person("enes",19)


function yasHesapla(dogumyili){
   return 2022-dogumyili
}

let ageYusuf= yasHesapla(1995);
let ageBünyamin= yasHesapla(1998);
console.log(ageYusuf)
console.log(ageBünyamin)


function ehliyetim(dogumyili,isim) {
let yas = yasHesapla(dogumyili)
let ehliyet = 18-yas;

if(ehliyet>0){
    console.log(`${isim}ehliyet için ${ehliyet} yıl gereklidir`)
}else {console.log("ehliyet alabilirsin");
}
}
ehliyetim(1990,"enes");
ehliyetim(2010,"enes");
ehliyetim(1999,"enes");
ehliyetim(2006,"enes");


