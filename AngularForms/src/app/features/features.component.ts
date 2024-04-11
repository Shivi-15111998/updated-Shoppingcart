import { ReturnStatement } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
   input=""
   result=''
   dynamicval=""
    
 // @ViewChild('myDiv') myDiv: ElementRef | any;

 display(num:any){
  

//console.log("value")
  //console.log(this.myDiv.nativeElement.innerHTML)
   //let seven =document.getElementById("7")?.innerHTML
   this.input = this.input + num
   
   //document.getElementById("display")?.innerHTML==seven

 }
  
 operator(oper:string){
  const lastKey = this.input[this.input.length - 1];
    console.log(this.input[this.input.length - 1])
  if(lastKey==="+"||lastKey==="-"||lastKey==="*"||lastKey==="/"||lastKey==="%"){return;}
    this.input=this.input + oper
  

 }
 clear(){
  console.log("h")
  if(this.input!==""){
this.input=this.input.substring(0,this.input.length-1)

  }
 }
 
 allclear(){
  this.input='';
 }




 getresult(){
  let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log("Formula " +formula);
    this.result = eval(formula);
    this.input=this.result
}

}


