//Scrip3'ün aynısını yapan kodlardır fakat 11. satırla beraber daha pratik element ekleme yapılabilir
// To do Element ekleme
//herzaman olduğu gibi önce const ile değişkenler tanımlanır ve documnet.querySelector ile seçim yapılır

const forms = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewtask = document.querySelector("#btnAddNewtask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

//const items =["Todo 1","Todo 2","Todo 3","Todo 4","Todo 5","Todo 6","Todo 7"] ;


//browser2ın veritabanından yani değolama alanından element ekleme ve silme
//bu nedenle 11.satır yoruma alınmıştır
//ve cons yerine let ile değişken oluşturulacaltır, sabit olmamasıiçin
let todos


//load items
loadItems();

eventListeners();
function eventListeners() {
    //submit element
    forms.addEventListener("submit", addNewItem)
    //delete işlevinide burada görebiliriz
    taskList.addEventListener("click", deleteItem)
    //tüm elementleri silme işlemi için kod
    btnDeleteAll.addEventListener("click",deleteAllItems);
}



function loadItems(){
    todos =getItemFromLS();
     todos.forEach(function(item){
        creatItem(item);
     }) 
}

function getItemFromLS(){
    if(localStorage.getItem("todos")===null){
        todos =[];
    }else {
        todos = JSON.parse (localStorage.getItem("todos")) ; //bu satırda Arraye dönüştürme var(JSON.parse)
    }
    return todos;
}

//set item to local stroge
function setItemToLS(newTodo) { 
    todos= getItemFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos)); // Bu sefer Array diziye dönüşüyor (JSON.stringfy)
}

function creatItem(newTodo) {
     //elementi oluşturalım--örnek li

     const li = document.createElement("li");
     li.className = "list-group-item list-group-item-secondary";
     li.appendChild(document.createTextNode(newTodo));
 
 
 
     //ikinci elemnt oluşturma --örnek a
 
     const a = document.createElement("a");
     a.classList="delete-item float-right";
     a.setAttribute("href", "#");
     a.innerHTML = '<i class="fas fa-times"></i>';
 
     //elementleri birbirine bağlama --örnekte a ve li
     li.appendChild(a);
     taskList.appendChild(li);
}

function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
      //  console.log("submit");
    }
   //create itenm-yeni elemnt oluşturma
  creatItem(input.value); // Tanımlanan fonksiyonu çağırma ve değer girme

  setItemToLS(input.value);// Tanımlanan fonksiyonu çağırma ve değer girme


   input.value = ""; //elementi ekledikten sonra input alanını (form alanı) boşaltmak için

    e.preventDefault(); //sayfanın otomatik refresh'ini önler ve girilen bilgiler kaybolmaz

}


//Element Silme.. eğer elemntin parent'ı varsa önce onlara ulaşılır
//Bunun için önce 18 satırda event oluşturuldu

function deleteItem(e) {
     //silmeden önce sormasını istersek
        if (e.target.className === "fas fa-times") {
            if (confirm("silmek istediğinize emin misiniz?")) {
            //  console.log(e.target);
            e.target.parentElement.parentElement.remove();// iki parent var
               deleteTodoFromStorage(e.target.parentElement.parentElement.textContent) ;
        }
    }
    e.preventDefault(); //otomatik refreshi önlemek için

}

function deleteTodoFromStorage(deletetodo) {
    let todos = getItemFromLS();
    todos.forEach(function(todo,index){ 
        if(todo === deletetodo){
            todos.splice(index,1) //bulunduğu yerden itibaren 1 element siler
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));

}

//Tüm Elementleri sayfadan ve local storage den silme >>bunun için önce 20.satırda event oluşturuldu.
function deleteAllItems(e) {
    if(confirm("Tüm öğeleri silmek istediğine emin misiniz?")) {
        // taskList.childNodes.forEach(function(item){
        //     //console.log(item);
        //     if(item.nodeType ===1) { //bu satırın anlamı silmek için sadece li seçer ,textler 0'a eşittir
        //         item.remove();

               
                while(taskList.firstChild) { //son element de kalmayana kadar döngü devam eder.
                    taskList.removeChild(taskList.firstChild)
                }
                localStorage.clear();

            }

      //  })

   // }

    //alternatif yol
   // taskList.innerHTML="";
}










   



