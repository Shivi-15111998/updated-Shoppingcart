// function checkall(ele) {
//   let elements = document.getElementsByName("chk");
//   if (ele.checked) {
//     console.log(this)
//     for (let i = 0; i < elements.length; i++) {
//       if (elements[i].type == "checkbox") {
//         elements[i].checked = true;
//       }
//     }
//   } else {
//     for (let i = 0; i < elements.length; i++) {
//       if (elements[i].type == "checkbox") {
//         elements[i].checked = false;
//       }
//     }
//   }
// }
// function checkonly(){
    
//     let elements = document.getElementsByName("chk");
//     for (let i = 0; i < elements.length; i++) {
//         if(elements[i].checked==true){
//            let takenvalue= document.getElementsByClassName('names')
//         }
//     }
 
// }
// console.log(document.getElementById('hello').innerText)
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }

// let array=[1,2,3,2,4,5,1,6,7,8,8]
// let arr=array.sort()
//  let iap=new Map()
//  let main=[]
//  let count=1;
//  for(let i=0;i<arr.length;i++){
//    for(let j=1;j<arr.length;j++){
//     if(arr[i]==arr[j]){
//     count++
//    }iap.set(arr[i],count)
//    }count=0;
//  }
//  for(let [key, value] of iap){
//     console.log(key, value)
//     if(value===1){
//         main.push(key)
//     }
//  }
//  console.log(main)

// let arr = [{
//   a: 'Val_1',
//   b: 'Val_2'
// }, {
//   a: 'Val_3',
//   b: 'Val_4'
// }, {
//   a: 'Val_1',
//   b: 'Val_2'
// }];
// console.log(...arr)
// function myFunc(arr) {
  
//   arr.forEach(function (obj) {
//     delete obj.a
//     })
//     console.log(JSON.stringify(arr));
// //   arr.forEach(function (obj) {
// //       delete obj.a
// //   });

// //   console.log(JSON.stringify(arr));
//  }


let arr = [{
  a: 'Val_1',
  b: 'Val_2',
  c: 'Val_2'
}, {
  a: 'Val_3',
  b: 'Val_4',
  c: 'Val_2'
}, {
  a: 'Val_5',
  b: 'Val_6',
}];

function myFunc(arr) {
 
   arr.forEach(function (obj) {
     const {a,...newbite}=obj
//console.log(newbite) 
});
return newbite;
  
    
  
 
}

console.log(myFunc(arr))
