import { Component } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css'],
})
export class MylistComponent {
  array = ['shivangi', 'singh', 'shivhare'];
  raymond = true;

  newarray = [
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

  

  

  ar: any = [];
  obj: any = {};
  count: any = 0;
  name() {
    for (let i of this.newarray) {
      //this.obj[i.city]=this.obj[i.city]?this.obj[i.city]+1:1

      if (!this.obj[i.city]) {
        this.obj[i.city] = 1;
      } else {
        this.obj[i.city] += 1;
      }

      
    } console.log(this.obj);
    
    for(let value of Object.keys(this.obj)){
      //  this.count=value
    // console.log(value)
     


   
    const o =Object.entries(this.obj)
     for(let i of o){
      
       
      
    }

  }
}
}
