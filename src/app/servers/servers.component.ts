import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  selector:'[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
Servercreatestatus='No server created';
servername='';
username="";
servercreated=false;
servers=['testserver','testserver2'];

  constructor() {
    setTimeout(() => {this.allowNewServer=true;
      
    },2000 );
   }

  ngOnInit(): void {
  }
  onservercreate(){
    this.servercreated=true;
    this.servers.push(this.servername);
    this.Servercreatestatus='Server was created! Name is'+ ' ' +this.servername;
  }
onupdateservername(event:any){
  // this.servername=event.target.value;

  this.servername=(<HTMLInputElement>event.target).value;

}
onupdateusername(event:any){
  this.username=(<HTMLInputElement>event.target).value;
}
onclick(){
  this.username='';
}
}
