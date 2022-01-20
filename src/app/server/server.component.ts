import {Component} from '@angular/core';
@Component({
selector:'app-server',
templateUrl:'./server.component.html',

styles: [`.online {
    color: white;
}
`]
// styles:[`h2{
//     color:rgb(255, 255, 73);
//     font-size: 200%;
//     background-color: grey;
//     padding: 40px 20px 40px 20px ;
//     border: 2px  solid black;
// } 
// `]
})
export class ServerComponent{
    ServerId=18;
    ServerStatus='offline';
    constructor(){
        this.ServerStatus=Math.random() >0.5 ? 'online' : 'offline';
        
    }
    getServerStatus(){
        return this.ServerStatus;
    }
    getcolor(){
        return this.ServerStatus ==='online' ? 'green':'red ';
    }
  
}
