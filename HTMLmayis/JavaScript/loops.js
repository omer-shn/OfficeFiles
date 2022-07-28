
//Döngüler (loops)

//while

let i= 0
while (i<4) { console.log(i); i++}

let z =4
while(z>0) { console.log(z); z--}

//break ve continue

let x=0
while(x<10) {console.log(x);
  
         if (x==7){
           break
           }
           x++;
           }

// let y=0
//while (y<10) {
  //     if(y==3){
    //    continue
      // }
     //  console.log(y);
   //    y++;
  //  }   
  
  
  //do while loop
  let q=0
  do { console.log (q)
      q++}
      while (q<4);


  //for loop
  
  for(let h=0; h<5;h++) {
    console.log(h);
  }


  for (let e=25; e>20;e--) {
    console.log(e)
  }

  for (let e=25; e>20;e--) {
    if(e==22) {console.log("This number "+e);
    break
}
console.log(e)
   
}

let total =0
for(t=1;t<10;t++) {
   // total=total+t;
    total+=t;
}
console.log("toplam "+total)

let multi =1
for(t=1;t<10;t++) {
   // total=total+t;
    multi*=t;
}
console.log("çarpım toplamı "+multi)


//Dizi ve Döngüler

let cities = ["istanbul","Ankara","İzmir","Kütahya","Isparta"]

let users=[
    {fsname: "bülent", lsname: "korkmaz"},
    {fsname: "Hamza", lsname: "kaçmaz"},
    {fsname: "battal", lsname: "gazi"},
    {fsname: "karacaahmet", lsname: "sultan"},
]

for( let c=0;c<cities.length;c++){
    console.log(cities[c])
}

// for-in method

for(let v in cities) {
    console.log(`index:${v} value: ${cities [v]}`)
}

//for each method

cities.forEach(function(item){
    console.log(item)
})


for (let g =0;g<users.length;g++){
    console.log(users[g].fsname)
}

//map :returns an array

let dat = users.map(function(item){
    return item.fsname +" "+item.lsname
})
console.log(dat)
//


let numbers = [1,4,7,9]

let num= numbers.map(function(n)
{
    return n*n;
})
console.log(num)





