//Event bubbling
//Yapılan bir işlemin üst parentlere kadar etki etmesi olayıdır
//aşağıda 4 değişken tanımlı (form,cardbody,card,container) bu parent sayısına göre artırılabilir

const form =document.querySelector("form"); //parantez içine ("txtTaskName") formun id si de yazılabilir
const cardbody =document.querySelector(".card");
const card =document.querySelector(".card");
const container =document.querySelector(".container");


form.addEventListener("click",function() { console.log("form");})
cardbody.addEventListener("click",function() { console.log("card body");})
card.addEventListener("click",function() { console.log("card");})
container.addEventListener("click",function() { console.log("container");})

//işlemin tüm parentleri etkilemesi istenmiyorsa e işlevi ile e.stopPropagation() satırı eklenir
//böylece sadece seçilen event görülür
form.addEventListener("click",function(e) { console.log("form");e.stopPropagation()})
cardbody.addEventListener("click",function(e) { console.log("card body");e.stopPropagation()})
card.addEventListener("click",function(e) { console.log("card");e.stopPropagation()})
container.addEventListener("click",function(e) { console.log("container");e.stopPropagation()})



//Event Capturing
//yapılan işlemin dıştan içe etlilenmesi yani parentten childe doğru gelmesi içindir.
//bunun için ,true eklenir

form.addEventListener("click",function(e) { console.log("form");},true)
cardbody.addEventListener("click",function(e) { console.log("card body");},true)
card.addEventListener("click",function(e) { console.log("card");},true)
container.addEventListener("click",function(e) { console.log("container");e},true)

//birden fazla buton varsa
// const recorditems =document.querySelector(".fa-times");
// recorditems.forEach(function(item) {
//     item.addEventListener("click",function(e) {
//         console.log(e.target);
//     })
// });


const ulEvent = document.querySelector("ul");
ulEvent.addEventListener("click",function(e) {
    console.log(e.target);

})
