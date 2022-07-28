// Event Listener

//Aşağıdaki örnekt HTML sayfasınaki butonun id'si alınır ve event(olay) eklenir ve fonksiyon ile
// butona tıklandığında ne olması isteniyorsa belirtilir .Burada tılandığında "recorded" görünsün dendi

const btn= document.querySelector("#rec");

btn.addEventListener("click", function(){
    console.log("recorded");
})


//2.way Bunun farkı oluşturulan fonksiyon başka yerlerdede çağrılabilir
btn.addEventListener("click",btnClick) //fonksiyounun adı çağrıldı
function btnClick() {
    console.log("clicked")
}

//aynı fonksiyonu kullanalım, önce diğer buton için değişken oluşturulur ve event tanımlanır
const btn2= document.querySelector("#plus");
btn2.addEventListener("click",btnClick)

function btnClick() {
    console.log("plus clicked");
}

//butona ait event'leri görmek için
btn.addEventListener("click",function(a){
    let value;
    value =a;
    a.preventDefault();  //sayfanın otomatik refresh olmasını engellemek için aşağıdski kod yazılır

    value=a.target; //hangi butona tıklandığını colsele da gösterir
    value=a.target.id;// tıklanan butonun id ismini gösterir
    value=a.type; // işlemin tipini yansıtır (click)
        console.log(value)
})


//Mouse Evetleri

const msbtn = document.querySelector("#mouseTask");
const ul = document.querySelector("#mouse-list");

//msbtn.addEventListener("click",run); // tek tıklama event
//ul.addEventListener("click",run);

//msbtn.addEventListener("dblclick",run); //çift tıklama event

//msbtn.addEventListener("mousedown",run);
//msbtn.addEventListener("mouseup",run);
//msbtn.addEventListener("mouseenter",run); //mouse üzerine gelince çalışır
//msbtn.addEventListener("moyseleave",run); //mouse üzerinden ayrılınca çalışır

ul.addEventListener("mouseover",run);
ul.addEventListener("mouseout",run);
ul.addEventListener("mousemove",run);


function run(event){
    console.log(`event type: ${event.type}`);
}








