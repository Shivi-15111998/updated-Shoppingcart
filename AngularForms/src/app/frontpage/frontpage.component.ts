import { Component } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {

 function(){
  document.getElementById("myDropdown").classList.toggle("show");
 }
  
}
