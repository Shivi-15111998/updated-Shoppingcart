
// // // let startBtn = document.getElementById('start');
// // // let stopBtn = document.getElementById('stop');
// // // let resetBtn = document.getElementById('reset');

// // // let hours = 00;
// // // let minutes = 00;
// // // let second = 00;
// // // let count = 00;

// // // startBtn.addEventListener("click", () => {
// // //   timer = true;
// // //   //console.log("e")
// // //   stopWatch();
// // // });

// // // stopBtn.addEventListener("click", () => {
// // //   timer = false;
// // // });
// // // resetBtn.addEventListener("click", () => {
// // //   timer = false;
// // //   hours = 0;
// // //   minutes = 0;
// // //   second = 0;
// // //   count = 0;

// // //   document.getElementById("hr").innerHTML = "00";
// // //   document.getElementById("sec").innerHTML = "00";
// // //   document.getElementById("min").innerHTML = "00";
// // //   document.getElementById("count").innerHTML = "00";
// // // });

// // // function stopWatch() {
// // //         if (timer) {
// // //             count++;
    
// // //             if (count == 100) {
// // //                 second++;
// // //                 count = 0;
// // //             }
    
// // //             if (second == 60) {
// // //                 minutes++;
// // //                 second = 0;
// // //             }
    
// // //             if (minutes == 60) {
// // //                 hours++;
// // //                 minutes = 0;
// // //                 second = 0;
// // //             }
    
// // //             let hrString = hours;
// // //             let minString = minutes;
// // //             let secString = second;
// // //             let countString = count;
    
// // //             if (hours < 10) {
// // //                 hrString = "0" + hrString;
// // //             }
    
// // //             if (minutes < 10) {
// // //                 minString = "0" + minString;
// // //             }
    
// // //             if (second < 10) {
// // //                 secString = "0" + secString;
// // //             }
    
// // //             if (count < 10) {
// // //                 countString = "0" + countString;
// // //             }
    
// // //             document.getElementById('hr').innerHTML = hrString;
// // //             document.getElementById('min').innerHTML = minString;
// // //             document.getElementById('sec').innerHTML = secString;
// // //             document.getElementById('count').innerHTML = countString;
// // //             setTimeout(stopWatch,10);
// // //         }
// // //     }
    

// // // function primenumber(n){
    
// // //     if(n==1){
// // //         console.log("its  nor prime number and nor composite number is 1")
// // //     }
// // //     else if(n>1){
// // //         for(let i=2;i<n;i++){
// // //           //  console.log(n)
// // //             if(n%i == 0){
// // //                return  console.log("number is  not prime")
// // //             }else{
// // //                return console.log("number is prime")
// // //             }
// // //         }
             
            
// // //     }
// // //         else{"hello"}
// // //     }
// // //     console.log(primenumber(3))
// // // function arm(number){
// // //     var  numberOfDigits = number.length;
// // //     let sum = 0;
    
// // //     // create a temporary variable
// // //     let temp = number;
    
// // //     while (temp > 0) {
    
// // //         let remainder = temp % 10;
    
// // //         sum += remainder ** numberOfDigits;
    
// // //         // removing last digit from the number
// // //         temp = parseInt(temp / 10); // convert float into integer
// // //     }
    
// // //     if (sum == number) {
// // //         console.log(`${number} is an Armstrong number`);
// // //     }
// // //     else {
// // //         console.log(`${number} is not an Armstrong number.`);
// // //     }
// // //     }
// // //     console.log(arm(371))
// // // Online Javascript Editor for free
// // // Write, Edit and Run your Javascript code using JS Online Compiler
// // // let employee = [ 

// // //     {First_name:"Eleanor", LastName:"Bolton", designation:"CEO, Co-Founder",  city:"gwalior",tags: ["Finance","San Francisco", "Mentor", "Top Management"], age:45},
    
// // //     {First_name:"Eleanor", LastName:"Shields", designation:"CTO, Co-Founder",city:"indore",tags:["Engineering","San Francisco", "Mentor", "Top Management"], age:34},
    
// // //     {First_name:"Marek", LastName:"Goodman", designation:"CFO", city:"indore", tags:["Operations","New York", "Mentor", "Top Management"], age:31},
                             
// // //     {First_name:"Lisa", LastName:"Whitehouse", designation:"CMO",city:"gwalior", tags:["People","San Francisco", "Mentor", "Top Management"], age:39},
    
// // //     {First_name:"Buster", LastName:"Mackenzi", designation:"COO",city:"gwalior", tags:["Product","New York", "Mentor", "Top Management"], age:43}
                           
// // //     ];
 
    const res = {};
// // //       var count=0;
// // //      for(let i=0;i<employee.length;i++){
// // //        const{city}=employee[i];
// // //       // console.log(const {city})
// // //        if(res.hasOwnProperty(city)){
// // //         console.log(res)
// // //         count++
// // //      }
// // //      else{
// // //         res[city] = 1;
// // //         count=1
// // //      };
// // //   };
  



// // //  console.log(count)




 



     
// //     // let name_array=[]
// //     // for(let i of employee){
// //     //  name_array.push(i.First_name)
// //     // } 
// //     //  let sorted_array=name_array.sort()
// //     //  


// //     //  let sorted_object=[]
// //     //  for(let i of sorted_array){
// //     //      for(let k of employee){
// //     //          if(i==k.First_name){
// //     //              sorted_object.push(k)
// //     //          }
// //     //      }
// //     //  }
// //     //  console.log(sorted_object)
// //     //   employee=sorted_object
// //     //   console.log(employee)
// //     // let employee_new=[]
// //     // for(let i of employee){
        
// //     //    // employee.push(employee_new)
// //     // },
// //     // console.log(employee)
// //     // console.log(employee.sort((a, b)=> {
// //     //     return a.First_name < b.First_name ? -1 : 1
// //     //   }))

      


      
// // //        if(i>=38){
// // //       // console.log(i)
// // //          if((i+2)%5==0){
// // //              //console.log(i)
// // //              array.push(i+2)
// // //          } else {
// // //              array.push(i)
// // //          }
// // //     }
// // //   if(i<38)
// // //  {
// // //      array.push(i)
// // //  }
       
  
// //  //}return array
      


// // //   let arr=["shivangi","singh","shivhare"]
// // //   let full_name=''
// // //  // console.log(arr[0]+arr[1]+arr[2])
// // //   for(let i of array){
// // //     full_name = full_name+i
// // //   //console.log(full_name)
// // //   }
// // //   console.log(full_name)
// // //   let newarray=[{
// // //    "name":shivang,
// // //    class: 10,
// // //    },
// // //    {
// // //       name:"ragahav",
// // //       class:10
// // //    },
// // //    { name:"unity",
// // //    class:12
// // // }
// // //   ]
 
// // //   console.log(newarray[0].name)
  
    

// // let mountains = [
// //    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
// //    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
// //    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
// //    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
// //    { name: "Monte Amiata", height: 1738, place: "Siena" }
// //  ];
 
// //  function generateTableHead(table, data) {
// //    let thead = table.createTHead();
// //    let row = thead.insertRow();
// //    for (let key of data) {
// //      let th = document.createElement("th");
// //      let text = document.createTextNode(key);
// //      th.appendChild(text);
// //      row.appendChild(th);
// //    }
// //  }
 
// //  function generateTable(table, data) {
// //    for (let element of data) {
// //      let row = table.insertRow();
// //      for (key in element) {
// //       let cell = row.insertCell();
// //       let text = document.createTextNode(element[key]);
// //       cell.appendChild(text);
// //     }
// //   }
// // }

// // let table = document.querySelector("table");
// // let data = Object.keys(mountains[0]);
// // generateTableHead(table, data);
// // generateTable(table, mountains);


// // journal = [
// //   {events: ["work", "touched tree", "pizza",
// //             "running", "television",["ram"]],
// //    squirrel: false},
// //   {events: ["work", "ice cream", "cauliflower",
// //             "lasagna", "touched tree", "brushed teeth"],
// //    squirrel: false},
// //   {events: ["weekend", "cycling", "break", "peanuts",
// //             "beer"],
// //    squirrel: true},
// //   /* and so on... */
// // ];

// // for(let i of journal ){
// // //console.log(i.squirrel)
// // }
// // console.log(journal[0].events[5][0])



// //  let customers = [
// //   {
// //     name: 'ahivangi',
// //     class: 10,
// //     city: 'gwalior',
// //   },
// //   {
// //     name: 'agahav',
// //     class: 11,
// //     city: 'barelii',
// //   },
// //   { name: 'unity', class: 10, city: 'gwalior' },
// //   { name: 'vikas', class: 10, city: 'agra' },
// //   { name: 'raghav', class: 12, city: 'delhi' },
// //   { name: 'gather', class: 12, city: 'punjab' },
// // ];

// // ar = [];
// //   obj= {};
// //   count = 0;
// //    function yell() {
// //     for (let i of newarray) {
// //       //this.obj[i.city]=this.obj[i.city]?this.obj[i.city]+1:1

// //       if (!this.obj[i.city]) {
// //         this.obj[i.city] = 1;
// //       } else {
// //         this.obj[i.city] += 1;
// //       }

      
// //     } console.log(this.obj);
    
// //     for(let [key,value] of Object.entries(this.obj)){
// //       //console.log(value)
// //     if(value>1){
// //       console.log(key)
// //     }
     
      
       
      
// //     }

// //   }
// // function GenerateTable() {
// //   //Build an array containing Customer records.
// //   var customers = new Array();
// //   customers.push(["Customer Id", "Name", "Country"]);
// //   customers.push([1, "John Hammond", "United States"]);
// //   customers.push([2, "Mudassar Khan", "India"]);
// //   customers.push([3, "Suzanne Mathews", "France"]);
// //   customers.push([4, "Robert Schidner", "Russia"]);

// //   //Create a HTML Table element.
// //   var table = document.createElement("TABLE");
// //   table.border = "1";

// //   //Get the count of columns.
// //   var columnCount = customers[0].length;

// //   //Add the header row.
// //   var row = table.insertRow(-1);
// //   for (var i = 0; i < columnCount; i++) {
// //       var headerCell = document.createElement("TH");
// //       headerCell.innerHTML = customers[0][i];
// //       row.appendChild(headerCell);
// //   }

// //   //Add the data rows.
// //   for (var i = 1; i < customers.length; i++) {
// //       row = table.insertRow(-1);
// //       for (var j = 0; j < columnCount; j++) {
// //           var cell = row.insertCell(-1);
// //           cell.innerHTML = customers[i][j];
// //       }
// //   }

// //   var dvTable = document.getElementById("dvTable");
// //   dvTable.innerHTML = "";
// //   dvTable.appendChild(table);
// // }
// // window.onload = GenerateTable
// let array=["tea","coffee","handson"]
// function generatelist(){

//     var list= document.getElementById("list");
//  for(let i=0;i<=array.length-1;i++){
//      var listele=document.createElement('li')
//      listele.innerText=array[i];
//      list.append(listele)}



// }


//     var customers = new Array();
//       customers.push(["Customer Id", "Name", "Country"]);
//       customers.push([1, "John Hammond", "United States"]);
//       customers.push([2, "Mudassar Khan", "India"]);
//       customers.push([3, "Suzanne Mathews", "France"]);
//       customers.push([4, "Robert Schidner", "Russia"]);
let customers = [
      {
        name: 'ahivangi',
        class: 10,
        city: 'gwalior',
      },
      {
        name: 'agahav',
        class: 11,
        city: 'barelii',
      },
      { name: 'unity', class: 10, city: 'gwalior' },
      { name: 'vikas', class: 10, city: 'agra' },
      { name: 'raghav', class: 12, city: 'delhi' },
      { name: 'gather', class: 12, city: 'punjab' },
    ];


     
 function generatetable(){
    
    let tablediv= document.getElementById("dvTable")
     let headlength=Object.values(customers[0]).length;
     console.log(headlength)
     let tbody=document.createElement("TABLE");
     tbody.border=1
     
      //let row = tbody.insertRow(-1);
     for(const key in customers[0])
     {   
        let thead=document.createElement("TH");
        thead.innerText=key
        tbody.append(thead)

     }
    //  for rows
    customers.forEach((rowData) => {
        // Create a row element
        const row = document.createElement('tr');
      

    for(const key in rowData){
        // row = tbody.insertRow(-1);

        let trrow=document.createElement("Td")
        trrow.innerHTML= rowData[key];
        tbody.append(trrow)
        

          

    }
    tbody.appendChild(row);
})






     tablediv.innerHTML = "";
     tablediv.appendChild(tbody);


 }
 window.onload=generatetable()
