import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  template:`<h2>Wlecome {{name}}</h2>

<h4 [style.color]="isdis ? 'red' : 'green'">kellton</h4>

  <h4 >{{name.length}}<h4>

  <h4>{{name.toUpperCase()}}<h4>

  <h4>{{site}}</h4>

  <input [id]="myid" type="text" value ="kellton">

  <input [disabled]="isdis" id="{{myid}}" type="text" value="kellton"> 
  <h4 [ngStyle]=bang>kellton tec</h4> 
  <button (click)="onclick($event)">here</button> {{abc}} 
  
  <input [(ngModel)]="name" type=text>
  <h4 *ngIf="true">Code eva</h4>`
,

  
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
public name="kellton";
public myid="testid";
private site=window.location.href;
public isdis=false;
public bang={color:"blue",fontStyle:"bold"}
public abc="";
  constructor() { }

  ngOnInit() {
    
    }
    onclick(event){
      console.log(event);
      this.abc='bye';
  }

}
