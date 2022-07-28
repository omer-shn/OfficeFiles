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


function run(e){console.log(e.type);}