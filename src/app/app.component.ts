import { Component ,OnInit} from '@angular/core';
import { EmpService } from './emp.service';
function log(target,name,discryptor){
  console.log(target,name,discryptor)
  const orignal=discryptor.value;
  discryptor.value=function(){
    console.log("hacked");
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  @log
  asimplified()
  {
    console.log("hey ");
  }
  
  
  constructor(private emp:EmpService){
    
    this.asimplified()
  }
  ngOnInit(){
    this.emp.getData().subscribe(res=>
      {
        console.log(res);
      }),err=>{
        console.log(err);
      }
      this.emp.setData().subscribe(res=>
        {
          console.log(res);
        }),err=>{
          console.log(err);
        }
  }
  title = 'testing';
}
