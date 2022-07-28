

//Window objesi

/*
a1= window;
console.log(a1)

//alert
alert("Merhaba")


//prompt
var veriName= prompt("Adınızı giriniz: ")

//confirm
var exit= confirm("çıkmak istediğinize eminmisiniz")
if( exit) { console.log("sistemden çıktınız")}
else{console.log("sistemdesiniz")}
console.log(exit)

*/

//location 
//datas2 = window.location;
//datas2 = window.location.href;
//datas2= window.location.hostname;

//window.location.href="https://www.udemy.com.tr"
//console.log(datas2)


//scope kavramı

var veri1 =5; 
let veri2 =10; 
const veri3 =15;

function fonksiyon(){
    var veri1=30;
    let veri2=40;
    const veri3=50;

    console.log(veri1,veri2,veri3);

    console.log(veri1,veri2,veri3)

}

console.log("merhaba")

/*
let veri;
veri = window.document;
veri =window.document.head
veri =window.document.body
veri =window.document.URL
veri= window.document.images
veri=window.document.forms
veri=window.document.forms[0].method

console.log(veri)
*/



// Element Seçilmesi
//   tekli elemnt get.ElementById 
/*
let very;

very =document.getElementById("header");

//very = very.id;
//very = very.className;
//very= very.style.fontSize ="90px";
document.getElementById("header").innerHTML="Enes";
console.log(very);
*/


//querySelector
/*
console.log(documnet.querySelector("#header"));
console.log(documnet.querySelector("div"));

documnet.querySelector("li").style.color="blue";
documnet.querySelector("li").className="list-group-item-primary";
documnet.querySelector("li").classList.add("active"); //class ekler
*/

//ÇOKLU ELEMENT
//Bu örnek sadece class ataması yapılanlar için
let multi

multi =document.getElementsByClassName("enerun");

//multi=document.getElementsByClassName("enerun")[0]; //istenen index yazılabilir

multi=multi[1]   //kısa yoldan index seçimi, ilk satır tanımladığı için artık sadece değişken kullanılabilir.

/*
multi[1].style.fontSize= "30px";

for(let i=0;i<multi.clientHeight; i++) {
    console.log(multi[i].style.color="orange");
    console.log(multi[i].textContent="new titem");
    
}
*/

//tag name ile seçme
/*
multi =document.getElementsByTagName("p")
multi=document.getElementsByClassName("p").getElementsByTagName("form") //bir alt listeye iner.

multi.forEach(function(item,index) { item.textContent= `${index}- item`;
    
});
*/


//Element değiştirme

/*
let=value;
value= namecard;
value=namecard.childNodes;
const namecard=document.querySelector(".enerun")
//namecard=adiniz.childNodes;
//namecardadiniz.children[0].textContent= "input name";
//value=namecard.getElementsByClassName("enerun")[0].textContent="input";
value=namecard.children[1].textContent="input"

value=namecard.firsElementChild;
value=namecard.lastElementChild;
console.log(value)
*/


//ELEMENT OLUŞTURMA

const li = document.createElement("li");

//add class

li.className= "list-group"

//attribute

li.setAttribute("title","new item");
li.setAttribute("data-id","5");

const text =document.createTextNode("new item");

li.appendChild(text);

const a =document.createElement("a");
a.setAttribute("href","#");
a.className = "list-group";
a.innerHTML = '<i class="fas fa-items"></i>';
li.appendChild(a);
document.querySelector("#task-list").appendChild(li);


console.log(li);



//ELEMENT SİLME

const taskList = document.querySelector("#task-list");
//taskList.remove();  //tüm ul silinir çünkü id ul ye ait

//taskList.childNodes[3].remove();  //childNotex index sayarken tüm içeriği txt vs sayar
//bunedenle sadece öğeleri doğru silmek için children kullanılması faydalı olur
taskList.children[1].remove();

//bir başka öğe silmeişlemi
taskList.removeChild(taskList.children[0]);



//ATTRIBUTE SİLME

//taskList.children[1].removeAttribute("class");   //CSS özelliğini silebiliriz


//bU döngüyle tüm attribute tek sefer silnebilir, örnekte class seçildiği için tüm class attributeleri etkilenir
//for(let i=0;i<taskList.children.length;i++) {
  //  taskList.children[i].removeAttribute("class");  }

  console.log(taskList);



//ELEMENT GÜNCELLEME

const cardHeader = document.querySelector(".card-header");
const h2 = document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("Yeni Liste"));
cardHeader.replaceWith(h2,cardHeader);


//Alttaki iki satır kod ,eğer öğenin parent'ı varsa kullanılır.
//const parent = document.querySelector(".card")
//parent.replaceChild(h2,cardHeader);

console.log(cardHeader);

//CLASS GÜNCELLEME

const kaskList =document.querySelector("#task-list");

let value;

link =kaskList.children[0].children[0];

value =link.className;
value= link.classList;
//value= link.classList[1];

link.classList.add("new"); //yeni bir class eklemek için add kullanılır
link.classList.remove("new");// yeni oluşturulan class remove komutuyla silinyor


//Attribute Güncelleme

value =link.getAttribute("href");
value =link.setAttribute("href","https://instagram://leventEnesus");

value=link.hasAttribute("href");  //bir attribute'ın kodlar içinde olduğunu doğrulamak için
//hasAttribute komutu kullanılır



console.log(value);













