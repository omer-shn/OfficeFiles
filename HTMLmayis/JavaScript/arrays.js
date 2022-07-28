//Arrays

let names = ["asım","banu","cenk"]
let years= [1992,1998,2009]
let mix =["asım","keskin",1992,null,undefined,["programming","books"]]
let point =[73,45,98,39,82,79]



console.log(names)
console.log(names.length)
console.log(typeof names)

console.log(years)
console.log(mix)

// get array item

console.log(names[0]);

// set array item

names[1]="hilal";

names[4]="hasan"
names[names.length]="bilal" //sayR VE sona ekler



// add item

names.push("eda") //son ekler
names.unshift("seda") // başa ekler

//remove item

years.pop(); //dizi içindeki son elemanı siler

years.shift()//ilk elemanı siler
console.log(years)

//indexOf

let index =names.indexOf("hasan")
console.log("index "+index)

//reverse
names.reverse()
names.sort()

//short

point.sort()
console.log(point)

let newdata =names.concat(years)
console.log(newdata)

names.splice(2,0,"ahmet") //2. indexten başla birşey silmeden parantez içi değeri ekler
names.splice(4,1,"nesim") //4. indexten başlar ilk indexi siler ve parantez içi değeri ekler


console.log(names)

// if- else

const fName ="zeynel"
const userName ="zeyUser"
const hisage =22
const isStudent =true
const school ="univercity"

if (userName=="zeyUser") { console.log("Hello "+fName)}
else{ console.log("invalid user")}

if (hisage===22) {console.log ("yaşınız "+hisage)}

if (isStudent) {console.log("what is your branch")}
else{"what is your profession"}

if(hisage>=18) {
    if (school =="univercity") console.log("ehliyet alabilir")
    else{console.log("Eğitim durumu yetertsiz")}
} else {console.log("yaşı yetersiz")}


if (typeof id != "undefined") { console.log ("id:"+ id)}
else {console.log("no id")}

//Switch Koşul Yapısı

let islem =7;

switch (islem) {
    case 1: console.log("1.nolu işlem yapıldı")
    break;
    case 2: console.log("2.nolu işlem yapıldı")
    break;
    case 3: console.log("3.nolu işlem yapıldı")
    break;
    default: console.log("işlem yapılmadı")
    break;
}

let day;

switch(new Date().getDay()+2) {  //2 gün artırıldı
    case 0: day ="pazar";
    break
    case 1: day ="pazartesi";
    break
    case 2: day ="salı";
    break
    case 3: day ="çarşamba";
    break
    case 4: day ="perşembe";
    break
    case 5: day ="cuma";
    break
    case 6: day ="cumartesi";
    break
    

}
console.log(day)

let hour =10;

switch(true) {
    case hour >=6 && hour <= 12:
    console.log("Günaydın")
    break

    case hour >=13 && hour <= 17:
    console.log("iyi günler")
    break

    case hour >=18 && hour <= 24:
    console.log("iyi akşamlar")
    break
    default:
    console.log("invalid time")
    break
}

// Object Literals

let datas;

let user ={
    uname : "hasanGül",
    fn    :"hasan",
    ln :"gül",
    age1:45,
    hobbies: ["plants","books","chess","software"],
    address :{
        city:"istanbul",
        country:"Türkiye",
        phone:"435346570009"
    }
        }

        datas = user;  // veri user'a eşitlendi
        datas =user.fn
        datas=user.hobbies
        datas=user.hobbies.length
        datas=user.address.city

        console.log(datas)
        console.log(typeof user)
       // console.log(user)
