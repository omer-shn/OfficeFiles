// Keyboard Eventleri

//focus event
const textfocus =document.getElementById("txtTaskName");
textfocus.addEventListener("focus",run);
//blur event
const textblur=document.getElementById("txtTaskName");
textblur.addEventListener("blur",run);

//yukarıdaki örneklerde istenirse aynı değişken (textfocus) içinde blur çalıştırılabilir
//textfocus.addEventListener("blur",run);

//paste event
const textpaste=document.getElementById("txtTaskName");
textpaste.addEventListener("paste",run);
//copy event
const textcopy=document.getElementById("txtTaskName");
textcopy.addEventListener("copy",run);
//cut event
const textcut=document.getElementById("txtTaskName");
textcut.addEventListener("cut",run);
//select event
const textselect=document.getElementById("txtTaskName");
textselect.addEventListener("select",run);
//keydown event
const textkeydown=document.getElementById("txtTaskName");
textkeydown.addEventListener("keydown",run);
//keyup event
const textkeyup=document.getElementById("txtTaskName");
textkeyup.addEventListener("keyup",run);





//yukarıdaki tüm işlemlerin konsola yansıması için bu run fonksiyonu tanımlanır
//2. console klavyeye yazılan karakterleri görmek için
function run(e){console.log(e.type);
                console.log(e.target.value);}  