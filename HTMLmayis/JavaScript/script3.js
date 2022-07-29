
// To do Element ekleme
//herzaman olduğu gibi önce const ile değişkenler tanımlanır ve documnet.querySelector ile seçim yapılır

const forms = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewtask = document.querySelector("#btnAddNewtask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");


//ikinci adım event tanımlama işidir

eventListeners();
function eventListeners() {
    //submit element
    forms.addEventListener("submit", addNewItem)
    //delete işlevinide burada görebiliriz
    taskList.addEventListener("click", deleteItem)
    //tüm elementleri silme işlemi için kod
    btnDeleteAll.addEventListener("click",deleteAllItems);
}

function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
        console.log("submit");
    }
    console.log("submit")

    //elementi oluşturalım--örnek li

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(input.value));



    //ikinci elemnt oluşturma --örnek a

    const a = document.createElement("a");
    a.classList="delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    //elementleri birbirine bağlama --örnekte a ve li
    li.appendChild(a);
    taskList.appendChild(li);

    input.value = ""; //elementi ekledikten sonra input alanını (form alanı) boşaltmak için

    e.preventDefault(); //sayfanın otomatik refresh'ini önler ve girilen bilgiler kaybolmaz

}


//Element Silme.. eğer elemntin parent'ı varsa önce onlara ulaşılır
//Bunun için önce 18 satırda event oluşturuldu

function deleteItem(e) {
    if (confirm("silmek istediğinize emin misiniz?")) { //silmeden önce sormasını istersek
        if (e.target.className === "fas fa-times") {
            //  console.log(e.target);
            e.target.parentElement.parentElement.remove();// iki parent var

        }
    }
    e.preventDefault(); //otomatik refreshi önlemek için

}

//Tüm Elementleri silme >>bunun için önce 20.satırda evwent oluşturuldu.
function deleteAllItems(e) {
    if(confirm("Tüm öğeleri silmek istediğine emin misiniz?")) {
        taskList.childNodes.forEach(function(item){
            //console.log(item);
            if(item.nodeType ===1) { //bu satırın anlamı silmek için sadece li seçer ,textler 0'a eşittir
                item.remove();

            }

        })

    }

    //alternatif yol
   // taskList.innerHTML="";
}
