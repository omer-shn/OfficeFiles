
// Tarayıcıl Depolama Alanları


// Session Storage
//çalışma devam ettği sürece yani browser aktif olduğu sürece geçici hafızaya alır
//önce herzaman ki gibi değişken oluşturarak html sayfasındaki id değerini querySelector ile seçeriz

const add= document.querySelector("#add");
const del= document.querySelector("#delete");
const clear= document.querySelector("#clear");

const addkey =document.querySelector("#addkey");
const addvalue =document.querySelector("#addvalue");
const clearkey =document.querySelector("#deletekey");


//sonra event ekleriz yani tıklmayayla hangi fonksiyonu yerine getirecekler onu belirleriz

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e){ sessionStorage.setItem(addkey.value, addvalue.value)}
function deleteItem(e){ sessionStorage.removeItem(deletekey.value)}
function clearItem(e) {sessionStorage.clear()}





// Local Storage
//çalışmalar yerel hafızada kullanıcı silene kadar kalır.

  //setItem-veri kaydeder
 localStorage.setItem("programlama","jacascript");
 localStorage.setItem("bilgisayar",7000);
 localStorage.setItem("education","effective");

  //getItem -varolan veriyi getirir
const value = localStorage.getItem("programlama");  
console.log(value);

  //clear local stroge--tamamını siler
 localStorage.clear(); 

  // Bir verinin araştırılması
  if(localStorage.getItem("klavye")===null) {
    console.log("sorgulanan veri bulunamadı")
  } else  { console.log("veri bulundu")}