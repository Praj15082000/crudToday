import { HttpClient } from '@angular/common/http';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-crud-component',
  templateUrl: './crud-component.component.html',
  styleUrls: ['./crud-component.component.css']
})
export class CrudComponentComponent {
    name : string="";
    userId : string="";
    phoneNumber : string="";
    createDate : string="";
    id = "";
    userArr : any[]= [];

    constructor(private _http: HttpClient){}

    // read(){

    // }
   post(){
    let bodyData = {
      "name" : this.name,
      "phoneNumber" : this.phoneNumber
    }

    this._http.post("http://localhost:3000/user/create", bodyData).subscribe({
      next: (res : any)=>{
        if(res){
          alert('added');
          this.name = '';
          this.phoneNumber = ''
        }
      }
    })
   }


}
