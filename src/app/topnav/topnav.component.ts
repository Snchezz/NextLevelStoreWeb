import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
    
  }

  public nav () {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
 
  }
  
}
